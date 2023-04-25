import React, {useEffect} from "react";
import BlogListItem from "./components/blog-list-item";
import CommonPage from "../../components/common-page/common-page";
import {getBlogList} from "../../service/blog";
import {useDispatch, useSelector} from "react-redux";
import {changeList, selectList} from "../../store/ViewModelSlice";

function Blog() {

    const dispatch = useDispatch()

    const list = useSelector(selectList)

    const initData = async () => {
        const data = (await getBlogList()).data
        dispatch(changeList(data))
    }

    useEffect(()=>{
        initData()
    },[])

    return (
        <CommonPage>
            {
                list.map((item,index)=>{
                    return (
                        <BlogListItem
                        title={item.title}
                        />
                    )
                })
            }

        </CommonPage>
    )
}

export default Blog