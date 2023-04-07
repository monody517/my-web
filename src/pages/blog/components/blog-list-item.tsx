import React from "react";
import "tailwindcss/tailwind.css"

function BlogListItem() {
    return (
        <div className={'w-1/2 bg-white p-3 m-3 rounded-2xl hover:shadow-xl'}>
            <img className={''} alt=''/>
            <div className={'flex flex-col'}>
                <div className={'font-bold text-2xl my-3'}>1111111</div>
                <div className={'text-1xl my-3'}>typeScript的一些稀奇方法</div>
                <div className={'my-3'}>
                    25 3
                </div>
            </div>
        </div>
    )
}

export default BlogListItem