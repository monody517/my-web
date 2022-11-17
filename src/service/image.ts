import request, {responseType} from "../utils/request";


export function getImgList() {
  return request({
    url: '/list',
    method: 'get',
  })
}

export function uploadImg(data: any) {
  return request({
    url: '/upload',
    method: 'post',
    headers: {
      ' Content-Type': 'application/x-www-form-urlencoded',
    },
    data
  })
}

export function uploadAvr(data: any) {
  return request({
    url: '/upload/avatar',
    method: 'post',
    data
  })
}

export function delectImg(imgUrl: string):Promise<responseType> {
  return request({
    url: `/delect?url=${imgUrl}`,
    method: 'post',
  })
}

