import React from "react";
import {Layout} from "antd";
import { useSelector } from 'react-redux';
import store from "../../../store";
import {selectCollapsed} from "../../../store/ViewModelSlice";

const Sider:React.FC = () => {

    const collapsed = useSelector(selectCollapsed)

    return (
        <Layout.Sider
            width={collapsed ? 0 : 200}
        >
            Sider
        </Layout.Sider>
    )
}

export default Sider