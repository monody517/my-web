import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";

interface ViewModelState {
    collapsed: boolean,
    markdown: string,
}

// 使用该类型定义初始 state
const initialState: ViewModelState = {
    collapsed: false,        // 控制Sider
    markdown: ''         // 文章详情

}

export const ViewModelSlice = createSlice({
    name: 'viewModel',
    initialState,
    reducers: {
        changeSider: state => {state.collapsed = !state.collapsed},
        changeMarkdown: (state,action:PayloadAction<string>) => {state.markdown = action.payload}
    }
})

export const {changeSider} = ViewModelSlice.actions
export const {changeMarkdown} = ViewModelSlice.actions

export const selectCollapsed = (state:RootState) => state.viewModel.collapsed
export const selectMarkdown = (state:RootState) => state.viewModel.markdown

export default ViewModelSlice.reducer