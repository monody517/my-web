import React, {useCallback, useState} from "react";
import { get } from "lodash";
import {useSelector,useDispatch } from 'react-redux';
import {changeSider, selectCollapsed, selectMarkdown} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getBlogList, saveBlog} from "../../../service/blog";
import {createFingerprint} from '../../../utils/index'
import {Input, Modal} from "antd";


const Header:React.FC = () => {

    const [article, setArticle] = useState<string>('')
    const [articleVisible, setArticleVisible] = useState<boolean>(false)

    const sider = useSelector(selectCollapsed)
    const markdown = useSelector(selectMarkdown)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeSider())
        if(!sider){
            getBlogList()
        }
    }

    const saveArticle = useCallback(()=>{
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
        saveBlog(data)
    },[])

    return (
        <div className={'flex flex-row items-center'}>
            <canvas id={'anchor-uuid'} width={200} height={100} style={{display: 'none'}}></canvas>
            <UnorderedListOutlined onClick={handleClick} />
            <div className={'ml-3'} onClick={()=>setArticleVisible(true)}>保存</div>

            <Modal
                title="请输入文章标题"
                visible={articleVisible}
                onCancel={()=>setArticleVisible(false)}
                onOk={saveArticle}
            >
                <Input value={article} onChange={(e)=>{setArticle(e.target.value)}}/>
            </Modal>
        </div>
    )
}

export default Header