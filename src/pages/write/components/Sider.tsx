import React from "react";
import {Layout} from "antd";
import { useSelector } from 'react-redux';
import store from "../../../store";
import {selectCollapsed} from "../../../store/ViewModelSlice";

const Sider:React.FC = () => {

    const collapsed = useSelector(selectCollapsed)

    return (
        <Layout.Sider
            width={collapsed ? 200 : 0}
            theme="light"
        >
           <div className={'bg-#9CA3AF'}>Sider</div>
        </Layout.Sider>
    )
}

export default Sider