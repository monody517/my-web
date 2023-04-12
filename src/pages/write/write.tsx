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
                    <div className={'flex flex-row items-center'}>
                        <div className={'w-1/3 flex-grow'}>
                            <ForEditor
                                height="calc(100vh - 85px)"
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
                        </div>
                        <div id={'preview'} className={'w-1/3 flex-grow'}>
                            <ForEditor
                                preview
                                // height={mode === 'mobile' ? 'calc(100vh - 70px)' : 'calc(100vh - 50px)'}
                                height={'calc(100vh - 85px)'}
                                // value={markdown}
                                lineNum={0}
                                toolbar={{}}
                            />
                        </div>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>


    )
}

export default Write