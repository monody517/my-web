import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './home-nav-bar.css'

function HomeNavBar() {

    const [img, setImg] = useState('')
    
    useEffect(() => {
        axios.get('http://192.168.10.77:8082/api/list').then(function (res) {
            console.log(res);
        }).catch(function (error) {
            // 处理错误情况
            console.log(error);
          })
    },[])

    return (
        <div className="HomeNavBar">
            
        </div>
    )
}

export default HomeNavBar