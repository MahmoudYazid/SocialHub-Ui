import { configureStore } from '@reduxjs/toolkit'
import ModeSlicer from './slicer'
export const store = configureStore({
    reducer: {
        ModeSlicerReducer: ModeSlicer
    },
})