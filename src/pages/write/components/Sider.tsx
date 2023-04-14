import React from "react";
import {Layout} from "antd";
import { useSelector } from 'react-redux';
import store from "../../../store";
import {selectCollapsed, selectLsit} from "../../../store/ViewModelSlice";

const Sider:React.FC = () => {

    const collapsed = useSelector(selectCollapsed)
    const list = useSelector(selectLsit)

    console.log(list);

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
                           <div key={title}>
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