import { LoginModal } from '../login/login-modal'
import './nav-bar.scss'
import {Popover} from "antd";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <div className={'flex '}>
            <nav>
                <NavLink to="/">首页</NavLink>
                <NavLink to="blog">产品</NavLink>
                <NavLink to="about">关于</NavLink>
            </nav>
            <LoginModal />
        </div>
    )
}

export default NavBar
