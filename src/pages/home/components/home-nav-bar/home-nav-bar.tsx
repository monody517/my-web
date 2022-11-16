import { LoginModal } from '../../../../components/login/login-modal'
import './home-nav-bar.scss'
import {Popover} from "antd";
import React, {useState} from "react";

function HomeNavBar() {

    return (
        <div className="HomeNavBar">
            <div></div>
            <LoginModal />
        </div>
    )
}

export default HomeNavBar
