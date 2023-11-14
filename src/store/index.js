import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import userSlice from './slices/userSlice'
import postsSlice from './slices/postsSlice'
import postSlice from './slices/postSlice'

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        user: userSlice.reducer,
        posts: postsSlice.reducer,
        post: postSlice.reducer
    }
})
