import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './tailwind.css';
import Home from "./pages/home/home";
import NavBar from "./components/nav-bar/nav-bar";
import {Layout} from "antd";
import Blog from "./pages/blog/blog";
import Write from "./pages/write/write";
import { Provider } from 'react-redux';
import store from './store/index'
import SubContainer from "./components/SubContainer";

const { Header, Content } = Layout;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
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
                            <Route path="/write" element={<Write />} />
                            <Route path="/upload-file" element={<SubContainer />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    </Provider>

)
