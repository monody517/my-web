import React from 'react'
import HomeNavBar from '../../components/home-nav-bar/home-nav-bar';
import './home.css';
import UploadImg from '../../hooks/uploadImg'

function Home() {

    return (
        <div>
            <HomeNavBar />
            <UploadImg></UploadImg>
        </div>
    )
}

export default Home