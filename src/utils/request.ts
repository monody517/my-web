// 创建axios实例
import axios from "axios";
import errorCode from "./errorCode";
import {message} from "antd";
import process from 'process';

// 是否显示重新登录
export let isRelogin = {show: false};


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.APP_BASE_API,
  // 超时
  timeout: 10000
})

console.log('service',process);

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const status = res.data.status || 200;
    // 获取错误信息
    const msg = res.data.massage || errorCode['default']
    // if (status === 401) {
    //   if (!isRelogin.show) {
    //     isRelogin.show = true;
    //     MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       isRelogin.show = false;
    //       store.dispatch('LogOut').then(() => {
    //         location.href = '/index';
    //       })
    //     }).catch(() => {
    //       isRelogin.show = false;
    //     });
    //   }
    //   return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    // } else
      if (status === 500) {
      message.error(msg)
      return Promise.reject(new Error(msg))
    } else if (status !== 200) {
      message.error(msg)
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let {message} = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    message.error(message)
    return Promise.reject(error)
  }
)

export default service


