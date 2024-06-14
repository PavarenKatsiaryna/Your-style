import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogIn } from "../types/interface";

export const fetchLogIn = createAsyncThunk(
  //эта thunk является частью среза (slice) Redux и имеет идентификатор "slice/fetchLogIn
  "slice/fetchLogIn",
  //ф-я fetchLogIn принимает два аргумента: obj, который является объектом интерфейса ILogIn
  //содержащим данные для аутентификации пользователя,
  //и объект, содержащий функцию rejectWithValue для обработки ошибок
  async function (obj: ILogIn, { rejectWithValue }) {
    try {
      // асинхронный запрос к API с методом POST, передавая данные пользователя в формате JSON
      const response = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      //если ответ от сервера не успешен (response.ok равно false),
      //то выбрасывается исключение с сообщением "ошибка в ауф юзер"
      if (!response.ok) {
        throw new Error("ошибка в ауф юзер");
      }
      //если запрос успешен, данные из ответа преобразуются в формат JSON и сохраняются в переменной data
      const data = await response.json();
      return data;
      //если произошла ошибка во время выполнения запроса, то она обрабатывается с помощью функции
      //rejectWithValue, которая возвращает сообщение об ошибке в виде строки
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
// срез состояния с именем "logIn"
export const logIn = createSlice({
  name: "logIn",
  initialState: {
    status: null,
    error: null,
  },
  //с помощью метода extraReducers и builder, определены три обработчика событий для действий
  reducers: {},
  extraReducers: (builder) => {
    //когда действие fetchLogIn.fulfilled выполняется успешно,
    // обновляется статус на "resolved", очищается поле ошибки error и выводится в консоль значение payload.
    builder.addCase(
      fetchLogIn.fulfilled,
      (state: any, { payload }: { payload: any }) => {
        state.status = "resolved";
        state.error = null;
        console.log(payload);
      }
    );
    //когда действие fetchLogIn.rejected выполняется с ошибкой,
    //статус обновляется на "rejected", в поле ошибки записывается значение payload
    builder.addCase(
      fetchLogIn.rejected,
      (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }
    );
    //когда действие fetchLogIn.pending находится в процессе выполнения,
    //статус устанавливается на "loading" и поле ошибки очищается
    builder.addCase(fetchLogIn.pending, (state: any) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export const {} = logIn.actions;

export default logIn.reducer;
