import request,{responseType} from '../utils/request';

interface userInfo {
  phone: string;
  userAvr: string;
  token: string
}

export function loginService(data: {phone: string,password: string}):Promise<responseType<userInfo>>{
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  })
}

export function registerService(data: {phone: string,password: string}):Promise<responseType>{
  return request({
    url: '/login/register',
    method: 'post',
    data: data
  })
}
