import request from "../utils/request";
import {ArticleType} from "../store/ViewModelSlice";

interface reponseType {
    data: any,
    status: number
}

export function getBlogList():Promise<reponseType> {
    return request({
        url: '/article/list',
        method: 'get',
    })
}

export function saveBlog(data:any):Promise<reponseType> {
    return request({
        url: '/article/save',
        method: 'post',
        data
    })
}

export function getBlog(item: ArticleType):Promise<reponseType> {
    return request({
        url: `/article/get?id=${item.id}`,
        method: 'get',
    })
}