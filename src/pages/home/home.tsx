import React, { useEffect, useState } from 'react'
import HomeNavBar from '../../components/home-nav-bar/home-nav-bar';
import './home.css';
import UploadImg from '../../hooks/uploadImg'
import axios from 'axios';
import { Image, message } from 'antd';

function Home() {
    const [img, setImg] = useState([])

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
            <div style={{display:'flex',flexDirection:'row',alignItems: 'center',maxWidth: '100%',flexWrap:'wrap'}}>
                {
                    img.map((item, index) => {
                        return (
                            <div className='img' key={index}>
                                <Image
                                    src='http://192.168.10.77:8082/shan_chu_18422d9377c.png'
                                    onClick={() => deleteImg(item)}
                                    preview={false}
                                    className='delete' />
                                <Image src={item} style={{ width: 120, height: 120 }} />
                            </div>
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}

export default Home