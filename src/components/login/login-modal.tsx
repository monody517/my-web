import React, {useEffect, useRef, useState} from 'react';
import {Modal, Form, Input, Checkbox, Button, message} from 'antd'
import axios from 'axios';
import UploadImg from '../uploadImg/uploadImg';
import {getUserAvar, loginService, registerService} from '../../service/login'

type Value = {
    phone: string,
    password: string
}

export function LoginModal() {

    const [title, setTitle] = useState<string | null>(null)
    const [islogin,setIsLogin] = useState(false)
    const [userInfo] = useState(JSON.parse(localStorage.getItem('userInfo') as string))

    useEffect(()=>{
        userInfo ? setIsLogin(true) : null
        // userInfo?.userPhone && localStorage.setItem('userInfo',JSON.stringify())
        userInfo?.userPhone && getUserAvar(userInfo.userPhone).then(res=>{
            localStorage.setItem('userInfo',JSON.stringify(res.data))
        })
    },[])

    const showModal = (str:string) => {
        setTitle(str)
    }
    const handleCancel = () => {
        setTitle(null)
    }

    const onFinish = (values: Value) => {
        title === '登录' ? login(values) : register(values)
    }

    const register = (values: Value) => {
        registerService({
                phone: values.phone,
                password: values.password
            }).then(res => {
                if (res.status === 500) {
                    message.error(res.massage)
                } else {
                    message.success(res.massage);
                    setTitle(null)
                }
            })
    }

    const login = (values: Value) => {
        loginService({
            phone: values.phone,
            password: values.password
        }).then(res => {
            if (res.status === 500) {
                message.error(res.massage)
            } else {
                message.success(res.massage);
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                setTitle(null)
                setIsLogin(true)
                setIsLogin(true)
            }
        })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            { islogin ?
                <UploadImg
                  avatar={true}
                  phone={userInfo?.userPhone}
                  changeLogin={()=>setIsLogin(false)}
                />
              :
            <div className={'space-x-4'}>
                <Button className={'text-white bg-blue-400'} onClick={()=>showModal('登录')}>登录</Button>
                <Button onClick={()=>showModal('注册')}>注册</Button>
            </div>
            }
            <Modal
                title={title}
                open={Boolean(title)}
                footer={null}
                onCancel={handleCancel}
                bodyStyle={{paddingLeft: 0,marginRight: 64,marginTop:20}}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[
                            { required: true, message: '请输入手机号' },
                            {pattern: /^(0|86|17951)?(1)[0-9]{10}$/, message: '手机号格式不正确'}
                        ]}
                    >
                        <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                        rules={[
                            { required: true, message: '请输入密码' },
                            {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9_]{6,20}$/, message: '密码为6-20位数字字母组合'}
                        ]}
                >
                    <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                {title}
                </Button>
            </Form.Item>
        </Form>
            </Modal>
    </div>
    )
}

