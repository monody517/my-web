import React from "react";
import BlogListItem from "./components/blog-list-item";
import CommonPage from "../../components/common-page/common-page";

function Blog() {
    return (
        <CommonPage>
            <BlogListItem />
        </CommonPage>
    )
}

export default Blog