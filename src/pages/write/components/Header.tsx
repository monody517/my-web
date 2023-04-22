import React, {useCallback, useState} from "react";
import { get } from "lodash";
import {useSelector,useDispatch } from 'react-redux';
import {changeList, changeSider, selectCollapsed, selectMarkdown} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getBlogList, saveBlog} from "../../../service/blog";
import {createFingerprint} from '../../../utils/index'
import {Input, message, Modal} from "antd";


const Header:React.FC = () => {

    const [article, setArticle] = useState<string>('')
    const [articleVisible, setArticleVisible] = useState<boolean>(false)

    const sider = useSelector(selectCollapsed)
    const markdown = useSelector(selectMarkdown)

    const dispatch = useDispatch()

    const handleClick = async () => {
        dispatch(changeSider())
        if(!sider){
            const data = (await getBlogList()).data
            dispatch(changeList(data))
        }
    }

    const saveArticle = async ()=>{
        console.log(article)
        console.log(markdown)
        // hash
        const hash = createFingerprint()

        const tid = get(location, 'query.tid', '')

        const data = {
            tid,
            type:1,
            hash,
            title: article,
            content:markdown,
        }
        const status = (await saveBlog(data)).status
        if(status === 200){
            message.success('新增成功')
            setArticleVisible(false)
            const list = (await getBlogList()).data
            dispatch(changeList(list))
        }
    }

    return (
        <div className={'flex flex-row items-center bg-gary-500'}>
            <canvas id={'anchor-uuid'} width={200} height={100} style={{display: 'none'}}></canvas>
            <UnorderedListOutlined onClick={handleClick} />
            <div className={'ml-3 cursor-pointer'} onClick={()=>setArticleVisible(true)}>保存</div>

            <Modal
                title="请输入文章标题"
                open={articleVisible}
                onCancel={()=>setArticleVisible(false)}
                onOk={saveArticle}
                okType={'default'}
            >
                <Input value={article} onChange={(e)=>{setArticle(e.target.value)}}/>
            </Modal>
        </div>
    )
}

export default Header