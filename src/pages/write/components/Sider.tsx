import React, {useState} from "react";
import {Input, Layout} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import store from "../../../store";
import {ArticleType, changeMarkdown, selectCollapsed, selectLsit} from "../../../store/ViewModelSlice";
import {getBlog} from "../../../service/blog";

const Sider:React.FC = () => {

    const [selectId,setSelectId] = useState<string>('')

    const collapsed = useSelector(selectCollapsed)
    const list = useSelector(selectLsit)

    const dispatch = useDispatch()

    const handleSelect = async (item:ArticleType) => {
        const data = (await getBlog(item)).data
        dispatch(changeMarkdown(data.content))
        setSelectId(item.id)
    }

    return (
        <Layout.Sider
            width={collapsed ? 200 : 0}
            theme="light"
        >
           <div className={'h-full'}>
               {
                   list.map(item=>{
                       const title = item.tid || item.id
                       return (
                           <button
                               key={title}
                               onClick={()=>handleSelect(item)}
                               className={selectId === item.id ?
                                   'bg-gray-200 w-full text-center p-2 cursor-pointer border-b-2 border-gray-200 border-solid' :
                                   'bg-white w-full text-center p-2 cursor-pointer border-b-2 border-gray-200 border-solid'
                               }
                           >
                               {item.title}
                           </button>
                       )
                   })
               }
           </div>
        </Layout.Sider>
    )
}

export default Sider