import request from '../utils/request';

export function loginService(data: {phone: string,password: string}){
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  })
}
