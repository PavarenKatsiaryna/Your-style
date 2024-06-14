import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { IObj } from "../types/interface";
//Thunk-действие использует функцию createAsyncThunk из библиотеки Redux Toolkit
//для работы с асинхронными операциями (для отправки POST-запроса на сервер)
export const fetchAuthUser = createAsyncThunk(
  "slice/fetchAuthUser",
  async function (obj: IObj, { rejectWithValue }) {
    try {
      const response = await fetch(`https://fakestoreapi.com/users`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      //если сервер возвращает успешный ответ (response.ok), данные из ответа преобразуются
      //в формат JSON и возвращаются в качестве результата Thunk-действия
      //в случае возникновения ошибки при выполнении запроса или парсинге данных,
      //Thunk-действие обрабатывает исключение и возвращает rejectWithValue с сообщением об ошибке
      if (!response.ok) {
        throw new Error("ошибка в ауф юзер");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
// это срез для управления состоянием пользователя аутентификации в Redux
// с помощью createSlice создается слайс с именем authUser,
// инициализирующим состоянием, которое содержит status и error
export const authUser = createSlice({
  name: "authUser",
  initialState: {
    status: null,
    error: null,
  },
  // затем в extraReducers устанавливаются обработчики для различных сценариев выполнения задачи
  // fetchAuthUser,таких как успешное выполнение, отклонение или ожидание
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAuthUser.fulfilled,
      (state: any, { payload }: { payload: any }) => {
        state.status = "resolved";
        state.error = null;
        console.log(payload);
      }
    );

    builder.addCase(
      fetchAuthUser.rejected,
      (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }
    );

    builder.addCase(fetchAuthUser.pending, (state: any) => {
      state.status = "loading";
      state.error = null;
    });
  },
});
// доступ к экшенам и редьюсеру данного среза
export const {} = authUser.actions;

export default authUser.reducer;
