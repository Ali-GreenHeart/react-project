import { createSlice } from "@reduxjs/toolkit"

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: []
    },
    reducers: {
        getPosts: (state, { payload }) => {
            state.value = payload
        }
    }
})
export default postsSlice;
export const postsActions = postsSlice.actions
