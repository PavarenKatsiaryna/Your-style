import { createSlice, current } from "@reduxjs/toolkit";

//срез  состояния счетчика'count' и начального состояния{ value: 1 }
export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 1,
  },
  //два reducers: increment и decrement
  // reducer increment увеличивает значение value на 1,
  // а reducer decrement уменьшает значение value на 1,
  //но только если значение больше 1
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});
//экспортируется counterSlice.reducer, который будет использоваться при создании Redux store
// для управления состоянием счетчика в приложении
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
