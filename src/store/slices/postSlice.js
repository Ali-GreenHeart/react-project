import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: 'post',
    initialState: {
        value: {
            isLiked: false
        }
    },
    reducers: {
        getPost: (state, { payload }) => {
            state.value = payload
        },
        likeIt: (state) => {
            if (!state.value.isLiked) {
                ++state.value.reactions
                state.value.isLiked = true
            }
        }
    }
})
export default postSlice;
export const postActions = postSlice.actions
