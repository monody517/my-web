import React, {useEffect} from "react";
import BlogListItem from "./components/blog-list-item";
import CommonPage from "../../components/common-page/common-page";
import {getBlogList} from "../../service/blog";

function Blog() {

    const getBlogList = () => {
        getBlogList()
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