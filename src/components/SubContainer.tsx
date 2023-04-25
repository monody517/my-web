import {start} from 'qiankun';
// @ts-ignore
import { registerApps } from "../utils/qiankun.js"
import {useEffect} from "react";

function SubContainer() {

    useEffect(()=>{
        // @ts-ignore
        if(!window.qiankunStarted){
            // @ts-ignore
            window.qiankunStarted = true
        }
        registerApps()
        start({
            sandbox: {
                experimentalStyleIsolation: true // 样式隔离
            }
        })
    },[])

    return (
        <div id={'sub-container'} ></div>
    )
}

export default SubContainer