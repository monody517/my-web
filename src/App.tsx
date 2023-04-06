import React from 'react'
import Home from './pages/home/home'
import { Layout } from 'antd';
import NavBar from "./components/nav-bar/nav-bar";
import './App.scss'

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <div className={'app'}>
      <Layout className={'layout-app'}>
        <Header className={'header'}>
          <NavBar />
        </Header>
        <Layout className={'layout-content'}>
          <Content>
            <Home />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
