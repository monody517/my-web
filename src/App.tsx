import React from 'react'
import Home from './pages/home/home'
import { Layout } from 'antd';
import NavBar from "./components/nav-bar/nav-bar";
import "tailwindcss/tailwind.css"

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <div>
      <Layout>
        <Header className={'bg-white flex'}>
        </Header>
        <Layout>
          <Content>
            <Home />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
