import React from "react";
import {useSelector,useDispatch } from 'react-redux';
import {changeSider, selectCollapsed} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getBlogList} from "../../../service/blog";

const Header:React.FC = () => {

    const sider = useSelector(selectCollapsed)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeSider())
        if(!sider){
            getBlogList()
        }
    }

    return (
        <div className={'flex flex-row items-center'}>
            <UnorderedListOutlined onClick={handleClick} />
            <div className={'ml-3'}>Header</div>
        </div>
    )
}

export default Header