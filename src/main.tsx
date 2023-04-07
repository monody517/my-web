import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './tailwind.css';
import Home from "./pages/home/home";
import NavBar from "./components/nav-bar/nav-bar";
import {Layout} from "antd";
import Blog from "./pages/blog/blog";

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <Layout>
          <Header className={'bg-white flex'}>
              <NavBar />
          </Header>
          <Layout>
              <Content>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/blog" element={<Blog />} />
                  </Routes>
              </Content>
          </Layout>
      </Layout>
  </BrowserRouter>
)
