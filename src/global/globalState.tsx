import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    user: {} || null
}

const globalState = createSlice({
    name: "second",
    initialState,
    reducers: {
        toggled: (state: any) => {
            state.toggle = true
        },
        changedToggle: (state: any) => {
            state.toggle = false
        },
        mainUser: (state: any, { payload }) => {
            state.user = payload
        },
        logOut: (state: any) => {
            state.user = null
        }
    }
});

export const { changedToggle, toggled, mainUser, logOut } = globalState.actions

export default globalState.reducer