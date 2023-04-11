import React, {useEffect} from "react";
import BlogListItem from "./components/blog-list-item";
import CommonPage from "../../components/common-page/common-page";
import {getBlog} from "../../service/blog";

function Blog() {

    const getBlogList = () => {
        getBlog()
    }

    useEffect(()=>{
        getBlogList()
    },[])

    return (
        <CommonPage>
            <BlogListItem />
        </CommonPage>
    )
}

export default Blog