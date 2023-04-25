import { LoginModal } from '../login/login-modal'
import './nav-bar.scss'
import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <div className={'w-full flex flex-row justify-end space-x-10'}>
            <nav className={'space-x-4'}>
                <NavLink to="/">首页</NavLink>
                <NavLink to="blog">博客</NavLink>
                <NavLink to="write">写作</NavLink>
                <NavLink to="about">关于</NavLink>
                <NavLink to="upload-file">上传</NavLink>
            </nav>
            <LoginModal />
        </div>
    )
}

export default NavBar
