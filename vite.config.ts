import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  envDir: './viteEnv',
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      },
    }
  },
  //配置跨域
  server: {
    open: true,  //启动项目后打开浏览器
    port: 8085,   //端口
    proxy: {
      '/api': {
        target: 'http://10.125.12.156:8082/',  //API服务地址
        changeOrigin: true,             //开启跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
