import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        user: userSlice.reducer,
    }
})
