import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//функция fetchData представляет собой обертку вокруг асинхронной операции,
//которая получает данные с удаленного сервера
export const fetchData = createAsyncThunk(
  //строка, используемая для идентификации этого асинхронного действия в Redux (уникальная для проекта).
  "slice/fetchData",
  //асинхронная функция, которая будет выполнена при вызове fetchData
  // принимает параметр _, который не используется (заглушка),
  // и объект rejectWithValue, который позволяет передать ошибку в случае неудачного выполнения операции
  async function (_, { rejectWithValue }) {
    try {
      //выполнение GET-запроса к указанному адресу для получения данных
      const response = await fetch("https://fakestoreapi.com/products");
      //проверка статуса ответа, если ответ не верен, выбрасывается ошибка
      if (!response.ok) {
        throw new Error("ошибка в апи");
      }
      // извлечение данных из ответа в формате JSON
      const data = await response.json();
      // успешное завершение операции, возвращение данных
      return data;
      //перехват ошибок при выполнении операции
      // в случае ошибки, вызывается rejectWithValue, передавая сообщение об ошибке
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
// срез состояния счетчикв  включает в себя ключи status, error, data и searchResults
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    status: null,
    error: null,
    data: [],
    searchResults: [],
  },
  //reducers для установки searchResults и обработчики для обновления состояния при выполнении,
  //отклонении и ожидании запросов данных из асинхронной операции fetchData
  reducers: {
    setSearchResults(state, { payload }) {
      state.searchResults = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchData.fulfilled,
      (state: any, { payload }: { payload: any }) => {
        state.status = "resolved";
        state.error = null;
        state.data = payload;
      }
    );

    builder.addCase(
      fetchData.rejected,
      (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }
    );

    builder.addCase(fetchData.pending, (state: any) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export const { setSearchResults } = counterSlice.actions;

export default counterSlice.reducer;
