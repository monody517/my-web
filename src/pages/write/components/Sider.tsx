import React, {useState} from "react";
import {Button, Layout, Popconfirm} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import {ArticleType, changeMarkdown, selectCollapsed, selectLsit} from "../../../store/ViewModelSlice";
import {getBlog} from "../../../service/blog";
import {PlusOutlined} from "@ant-design/icons";

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

    const confirm = () => {
        dispatch(changeMarkdown(''))
    }

    return (
        <Layout.Sider
            width={collapsed ? 200 : 0}
            theme="light"
        >
           <div className={'h-full'}>
               <Popconfirm
                   placement="bottomLeft"
                   title="该操作将会清空当前内容，确定新建吗？"
                   onConfirm={confirm}
                   okType={'default'}
               >
                   <Button icon={<PlusOutlined />}
                           className={'bg-white w-full text-center p-2 cursor-pointer border-2 border-gray-200 border-solid flex items-center justify-center'}>
                       新增文章
                   </Button>
               </Popconfirm>
               {
                   list.map(item=>{
                       const title = item.tid || item.id
                       return (
                           <button
                               key={title}
                               onClick={()=>handleSelect(item)}
                               className={selectId === item.id ?
                                   'bg-gray-200 w-full text-center p-2 cursor-pointer border-b-2 border-gray-200 border-solid flex justify-between' :
                                   'bg-white w-full text-center p-2 cursor-pointer border-b-2 border-gray-200 border-solid flex justify-between'
                               }
                           >
                               <span />
                               <span className={'w-9/12 truncate'}>{item.title}</span>
                               <span className={'text-red-500'}>删除</span>
                           </button>
                       )
                   })
               }
           </div>
        </Layout.Sider>
    )
}

export default Sider