import React, { HTMLAttributes } from "react";
import UploadImg from "../uploadImg/uploadImg";

interface Props extends HTMLAttributes<HTMLElement> {
    className?: string;
    title?: string
}

const CommonPage:React.FunctionComponent<Props> = (props) => {

    return (
        <div className={'w-full flex flex-col items-center'}>
            {props.children}
            <UploadImg avatar={false} />
        </div>
    )
}

export default CommonPage