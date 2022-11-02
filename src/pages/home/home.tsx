import React, { useEffect, useState } from 'react'
import HomeNavBar from './components/home-nav-bar/home-nav-bar';
import './home.css';
import UploadImg from '../../hooks/uploadImg'
import axios from 'axios';
import { message } from 'antd';
import { ImgList } from './components/imgList/img-list';

function Home() {
    const [img, setImg] = useState<string[]>([])

    function getList() {
        axios.get('http://192.168.10.77:8082/api/list').then(function (res) {
            if (res.data.state === 200) {
                setImg(res.data.result)
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
        console.log(imgUrl)
        axios.post(`http://192.168.10.77:8082/api/delect?url=${imgUrl}`).then(async function (res) {
            if (res.data.state === 200) {
                message.success('删除成功')
                getList()
            } else if (res.data.state === 500) {
                message.error(res.data.message)
            }
        }).catch(function (error) {
            // 处理错误情况
            console.log(error);
          })
    }

    console.log(img);
    
    return (
        <div>
            <HomeNavBar />
            <UploadImg getList={getList}></UploadImg>
            <ImgList img={img} deleteImg={ deleteImg }/>
        </div>
    )
}

export default Home