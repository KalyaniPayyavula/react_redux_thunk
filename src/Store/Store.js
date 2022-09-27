import { configureStore } from '@reduxjs/toolkit'
import UserActionSlice from '../Store/userActionSlice'

export default configureStore({
    reducer : {
      cash:  UserActionSlice,
    }
})