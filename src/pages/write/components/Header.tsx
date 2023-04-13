import React from "react";
import {useDispatch } from 'react-redux';
import {changeSider} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";

const Header:React.FC = () => {

    const dispatch = useDispatch()

    return (
        <div className={'flex flex-row items-center'}>
            <UnorderedListOutlined onClick={()=>dispatch(changeSider())} />
            <div className={'ml-3'}>Header</div>
        </div>
    )
}

export default Header