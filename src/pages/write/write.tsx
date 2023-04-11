import React from "react";
import ForEditor from "for-editor";
import {Layout} from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";


const Write: React.FC = () => {
    return (
        <Layout>
            <Sider></Sider>
            <Layout>
                <Header />
                <Layout.Content>
                    <ForEditor
                        height="calc(100vh - 64px)"
                        lineNum={0}
                        toolbar={{
                            h1: true,
                            h2: true,
                            h3: true,
                            h4: true,
                            img: true,
                            link: true,
                            code: true,
                            expand: true,
                            undo: true,
                            redo: true,
                        }}
                    />
                </Layout.Content>
            </Layout>
        </Layout>


    )
}

export default Write