import {configureStore} from "@reduxjs/toolkit";
import viewModelReducer from './ViewModelSlice'

const store =  configureStore({
    reducer: {
        viewModel: viewModelReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch