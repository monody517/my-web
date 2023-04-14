import React from "react";
import {Layout} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import store from "../../../store";
import {ArticleType, changeMarkdown, selectCollapsed, selectLsit} from "../../../store/ViewModelSlice";
import {getBlog} from "../../../service/blog";

const Sider:React.FC = () => {

    const collapsed = useSelector(selectCollapsed)
    const list = useSelector(selectLsit)

    const dispatch = useDispatch()

    const handleSelect = async (item:ArticleType) => {
        const data = (await getBlog(item)).data
        dispatch(changeMarkdown(data.content))
    }

    return (
        <Layout.Sider
            width={collapsed ? 200 : 0}
            theme="light"
        >
           <div className={'bg-#9CA3AF'}>
               {
                   list.map(item=>{
                       const title = item.tid || item.id
                       return (
                           <div key={title} onClick={()=>handleSelect(item)}>
                               {item.title}
                           </div>
                       )
                   })
               }
           </div>
        </Layout.Sider>
    )
}

export default Sider