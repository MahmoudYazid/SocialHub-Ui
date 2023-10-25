import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'light',
}

export const ModeSlicer = createSlice({
    name: 'ModeSlicer',
    initialState,
    reducers: {
        changeMode: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.mode == 'light' ? state.mode = 'dark' : state.mode = 'light' 
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeMode } = ModeSlicer.actions

export default ModeSlicer.reducer