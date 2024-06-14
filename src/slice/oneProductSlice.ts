import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//функция используется для получения данных об одном продукте с указанным id,
//добавлять продукты  в корзину, удалять их из корзины и загружать данные продукта
export const fetchOneProduct = createAsyncThunk(
  "slice/fetchOneProduct",
  //id:идентификатор продукта, который нужно получить
  //rejectWithValue:параметр, который предоставляется Redux Toolkit и используется для возврата значения в случае ошибки
  //async функция является асинхронной;используем оператор try/catch для обработки возможных ошибок при выполнении запроса
  async function (id: string, { rejectWithValue }) {
    try {
      //отправляем запрос на сервер с помощью функции fetch, чтобы получить данные о продукте с указанным id
      const response = await fetch(`https://fakestoreapi.com/products/${id}/`);
      //проверяем, был ли успешен запрос с помощью if (!response.ok), и если нет, выбрасываем ошибку
      if (!response.ok) {
        throw new Error("ошибка в апи два");
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

//срез для работы с данными одного продукта (onePost)
//начальное состояние среза
export const onePostSlice = createSlice({
  name: "onePost",
  initialState: {
    status: null,
    error: null,
    oneProduct: [],
    cartItems: [],
  },
  //reducers, которые определяют как изменить состояние при вызове определенных действий
  reducers: {
    //добавляет элемент в массив cartItem
    addToCart(state: any, { payload }: { payload: any }) {
      state.cartItems.push(payload);
    },
    //удаляет элемент из массива cartItems на основе переданного id
    clearCartAction(state: any, { payload }: { payload: any }) {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.id !== payload.id
      );
    },
    //очищает массив cartItems
    clearAllCartAction(state) {
      state.cartItems = [];
    },
  },
  //внутри функции задана логика для обработки нескольких различных сценариев при выполнении определённых действий
  extraReducers: (builder) => {
    //для действия fetchOneProduct.fulfilled, устанавливает статус как "resolved",
    //очищает ошибку, и присваивает полученный продукт полю oneProduct
    builder.addCase(
      fetchOneProduct.fulfilled,
      (state: any, { payload }: { payload: any }) => {
        state.status = "resolved";
        state.error = null;
        state.oneProduct = payload;
      }
    );
    //когда действие fetchOneProduct.rejected выполняется с ошибкой,
    //статус обновляется на "rejected", в поле ошибки записывается значение payload
    builder.addCase(
      fetchOneProduct.rejected,
      (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }
    );
    //когда действие fetchLogIn.pending находится в процессе выполнения,
    //статус устанавливается на "loading" и поле ошибки очищается
    builder.addCase(fetchOneProduct.pending, (state: any) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

//после определения всех reducer'ов в extraReducers, экспортируются несколько функций действий (actions)
// из onePostSlice.actions, также возвращается редьюсер (reducer) onePostSlice.reducer,
// который будет объединять все изменения состояния, определённые в этом файле.
export const { addToCart, clearCartAction, clearAllCartAction } =
  onePostSlice.actions;

export default onePostSlice.reducer;
