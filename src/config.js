// qiankun子应用配置
export default {
    subApps: [
        {
            name: 'upload-file', // 子应用名称，跟package.json一致
            entry: 'http://10.125.134.191:7001', // 子应用入口，本地环境下指定端口
            container: '#sub-container', // 挂载子应用的dom
            activeRule: '/upload-file', // 路由匹配规则
            props: {} // 主应用与子应用通信传值
        }
    ]
}