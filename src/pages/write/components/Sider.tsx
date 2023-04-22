import React, {useState} from "react";
import {Button, Layout, message, Popconfirm} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import {ArticleType, changeList, changeMarkdown, selectCollapsed, selectLsit} from "../../../store/ViewModelSlice";
import {delBlog, getBlog, getBlogList} from "../../../service/blog";
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

    const delItem = async (item:ArticleType) => {
        const status = (await delBlog(item)).status
        if(status === 200){
            message.success('删除成功')
            const data = (await getBlogList()).data
            dispatch(changeList(data))
            dispatch(changeMarkdown(''))
        }
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
                               <Popconfirm
                                   placement="bottomLeft"
                                   title="该操作将会删除选中文章，确定删除吗？"
                                   onConfirm={()=>delItem(item)}
                                   okType={'default'}
                               >
                                   <span className={'text-red-500'}>删除</span>
                               </Popconfirm>
                           </button>
                       )
                   })
               }
           </div>
        </Layout.Sider>
    )
}

export default Sider