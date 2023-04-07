import React from "react";
import "tailwindcss/tailwind.css"

function BlogListItem() {
    return (
        <div className={''}>
            <img className={'blog-list-item-img'}/>
            <div className={'blog-list-item-description'}>
                <div className={'blog-list-item-name'}>你不知道的typeScript</div>
                <div className={'blog-list-item-introduce'}>typeScript的一些稀奇方法</div>
                <div className={'blog-list-item-data'}>
                </div>
            </div>
        </div>
    )
}