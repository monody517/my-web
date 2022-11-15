import React from 'react'
import Home from './pages/home/home'
import { Layout } from 'antd';
import HomeNavBar from "./pages/home/components/home-nav-bar/home-nav-bar";
import './App.scss'

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <div className={'app'}>
      <Layout className={'layout-app'}>
        <Header className={'header'}>
          <HomeNavBar />
        </Header>
        <Layout className={'layout-content'}>
          <Sider>Sider</Sider>
          <Content>
            <Home />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
