import { LoginModal } from '../login/login-modal'
import './nav-bar.scss'
import {Popover} from "antd";
import React, {useState} from "react";

function NavBar() {

    return (
        <div className="HomeNavBar">
            <div></div>
            <LoginModal />
        </div>
    )
}

export default NavBar
