import React, { useEffect, useState } from 'react'
import UploadImg from '../../components/uploadImg/uploadImg'
import { message } from 'antd';
import { ImgList } from './components/imgList/img-list';
import {delectImg, getImgList} from "../../service/image";
import CommonPage from "../../components/common-page/common-page";

function Home() {
    const [img, setImg] = useState<string[]>([])

    function getList() {
        getImgList().then(function (res) {
            if (res.status === 200) {
                setImg(res.data)
            }
        }).catch(function (error) {
            // 处理错误情况
            console.log(error);
            return null
        })
    }

    useEffect(() => {
        getList()
    },[])

    const deleteImg = (imgUrl:string) => {
        delectImg(imgUrl).then(async function (res) {
            if (res.status === 200) {
                message.success('删除成功')
                getList()
            } else if (res.status === 500) {
                message.error(res.massage)
            }
        }).catch(function (error) {
            // 处理错误情况
            console.log(error);
          })
    }

    return (
        <CommonPage>
            <ImgList img={img} deleteImg={ deleteImg }/>
        </CommonPage>
    )
}

export default Home
