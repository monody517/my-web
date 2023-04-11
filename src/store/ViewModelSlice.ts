import {createSlice} from "@reduxjs/toolkit";

interface ViewModelState {
    collapsed: boolean
}

// 使用该类型定义初始 state
const initialState: ViewModelState = {
    collapsed: false
}

export const ViewModelSlice = createSlice({
    name: 'viewModel',
    initialState,
    reducers: {
        changeSider: state => {state.collapsed = !state.collapsed},
    }
})

export const {changeSider} = ViewModelSlice.actions

export const selectCollapsed = (state) => state.viewModel.collapsed

export default ViewModelSlice.reducer