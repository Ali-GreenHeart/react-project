import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import userSlice from './slices/userSlice'
import postsSlice from './slices/postsSlice'

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        user: userSlice.reducer,
        posts: postsSlice.reducer
    }
})
