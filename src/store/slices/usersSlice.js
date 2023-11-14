import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        getUsers: (state, { payload }) => {
            state.value = payload
        }
    }
})
export default usersSlice;
export const usersActions = usersSlice.actions
