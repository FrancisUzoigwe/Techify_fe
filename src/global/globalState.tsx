import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    authToggle: false,
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
        },
        authToggled: (state: any) => {
            state.authToggle = true
        },
        changedAuthToggle: (state: any) => {
            state.authToggle = false
        }
    }
});

export const { changedToggle, toggled, mainUser, logOut, authToggled, changedAuthToggle } = globalState.actions

export default globalState.reducer