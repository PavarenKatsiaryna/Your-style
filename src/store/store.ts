import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/cardsSlice'
import oneProductSlice from '../slice/oneProductSlice'
import authUserReducer from '../slice/authUsersSlice'
import LogInSlice from '../slice/LogInSlice'
import countSlice from '../slice/countSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    onePost: oneProductSlice,
    authUser: authUserReducer,
    LogIn: LogInSlice,
    count:  countSlice,
  },
})