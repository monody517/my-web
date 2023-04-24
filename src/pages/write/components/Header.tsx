import React, {useCallback, useState} from "react";
import { get } from "lodash";
import {useSelector,useDispatch } from 'react-redux';
import {changeList, changeSider, selectCollapsed, selectArticle, changeArticle} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getBlogList, saveBlog} from "../../../service/blog";
import {createFingerprint} from '../../../utils'
import {Input, message, Modal} from "antd";
import { createBrowserHistory } from 'history';


const Header:React.FC = () => {

    const sider = useSelector(selectCollapsed)
    const article = useSelector(selectArticle)

    const [articleTitle, setArticleTitle] = useState<string>('')
    const [articleVisible, setArticleVisible] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleClick = async () => {
        dispatch(changeSider())
        if(!sider){
            const data = (await getBlogList()).data
            dispatch(changeList(data))
        }
    }

    const saveArticle = async ()=>{
        console.log('article',article);
        // hash
        const hash = createFingerprint()

        const tid = get(location, 'search', '')

        const data = {
            tid:tid ? tid.split('=')[1] : '',
            type:1,
            hash,
            title: articleTitle,
            content:article.content,
        }
        const status = (await saveBlog(data)).status
        if(status === 200){
            message.success('新增成功')
            setArticleVisible(false)
            setArticleTitle('')
            dispatch(changeArticle({content: ''}))
            const list = (await getBlogList()).data
            dispatch(changeList(list))
        }
    }

    return (
        <div className={'flex flex-row items-center bg-gary-500'}>
            <canvas id={'anchor-uuid'} width={200} height={100} style={{display: 'none'}}></canvas>
            <UnorderedListOutlined onClick={handleClick} />
            <div className={'ml-3 cursor-pointer'} onClick={()=> {
                article.content ? setArticleVisible(true) : message.warn('请输入文章内容再保存')
            }}>保存</div>

            <Modal
                title="请输入文章标题"
                open={articleVisible}
                onCancel={()=>setArticleVisible(false)}
                onOk={saveArticle}
                okType={'default'}
            >
                <Input value={article.title || articleTitle} onChange={(e)=>{setArticleTitle(e.target.value)}}/>
            </Modal>
        </div>
    )
}

export default Header