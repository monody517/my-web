import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";

export interface ArticleType {
    id?: string
    tid?: string
    hash?: string
    title?: string
    content?: string
    type?: number
}

interface ViewModelState {
    collapsed: boolean,
    article: ArticleType,
    list: ArticleType[]
}

// 使用该类型定义初始 state
const initialState: ViewModelState = {
    collapsed: false,        // 控制Sider
    article: {
        id: '',
        tid: '',
        hash: '',
        title: '',
        content: '',
        type: 1
    },         // 文章详情
    list: [],        //文章列表
}

export const ViewModelSlice = createSlice({
    name: 'viewModel',
    initialState,
    reducers: {
        changeSider: state => {state.collapsed = !state.collapsed},
        changeArticle: (state,action:PayloadAction<ArticleType>) => {state.article = {...state.article,...action.payload}},
        changeList: (state,action:PayloadAction<[]>) => {state.list = action.payload}
    }
})

export const {changeSider} = ViewModelSlice.actions
export const {changeArticle} = ViewModelSlice.actions
export const {changeList} = ViewModelSlice.actions

export const selectCollapsed = (state:RootState) => state.viewModel.collapsed
export const selectArticle = (state:RootState) => state.viewModel.article
export const selectList = (state:RootState) => state.viewModel.list

export default ViewModelSlice.reducer