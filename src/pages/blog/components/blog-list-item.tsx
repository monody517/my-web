import React from "react";
import "tailwindcss/tailwind.css"
import {ArticleType} from "../../../store/ViewModelSlice";

function BlogListItem(props:ArticleType) {
    const {title} = props
    return (
        <div className={'w-1/2 bg-white p-3 m-3 rounded-2xl cursor-pointer motion-safe:hover:shadow-xl'}>
            <img className={''} alt=''/>
            <div className={'flex flex-col'}>
                <div className={'font-bold text-2xl my-3'}>{title}</div>
                <div className={'text-1xl my-3'}>{title}</div>
                <div className={'my-3'}>
                    25 3
                </div>
            </div>
        </div>
    )
}

export default BlogListItem