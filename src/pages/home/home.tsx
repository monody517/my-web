import React, { useEffect, useState } from 'react'
import HomeNavBar from './components/home-nav-bar/home-nav-bar';
import './home.css';
import UploadImg from '../../components/uploadImg/uploadImg'
import axios from 'axios';
import { message } from 'antd';
import { ImgList } from './components/imgList/img-list';
import {delectImg, getImgList} from "../../service/image";

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
        <div className={'home'}>
            <UploadImg getList={getList} avatar={false}></UploadImg>
            <ImgList img={img} deleteImg={ deleteImg }/>
        </div>
    )
}

export default Home
