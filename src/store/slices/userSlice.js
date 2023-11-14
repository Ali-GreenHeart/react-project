import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {}
    },
    reducers: {
        getUser: (state, { payload }) => {
            state.value = payload
        }
    }
})
export default userSlice;
export const userActions = userSlice.actions
