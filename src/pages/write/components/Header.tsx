import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import {changeSider} from "../../../store/ViewModelSlice";
import {UnorderedListOutlined} from "@ant-design/icons";

const Header:React.FC = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <UnorderedListOutlined onClick={()=>dispatch(changeSider())} />
            Header
        </div>
    )
}

export default Header