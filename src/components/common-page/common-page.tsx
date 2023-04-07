import React, {HTMLAttributes, ReactNode} from "react";
import UploadImg from "../uploadImg/uploadImg";

interface Props extends HTMLAttributes<HTMLElement> {
    title?: string
}

const CommonPage:React.FunctionComponent<Props> = (props) => {

    return (
        <div>
            {props.children}
            <UploadImg avatar={false}></UploadImg>
        </div>
    )
}

export default CommonPage