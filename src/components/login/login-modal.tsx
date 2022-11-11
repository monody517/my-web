import React, { useRef, useState } from 'react';
import {Modal, Form, Input, Checkbox, Button, message} from 'antd'
import axios from 'axios';
import UploadImg from '../../hooks/uploadImg';

type Value = {
    phone: string,
    password: string
}

export function LoginModal() {

    const [title, setTitle] = useState<string | null>(null)
    const [phoneVar, setPhoneVar] = useState<boolean>(false)
    const [passwordVar, setPasswordVar] = useState<boolean>(false)

    const showModal = (str:string) => {
        setTitle(str)
    }
    const handleCancel = () => {
        setTitle(null)
    }

    const onFinish = (values: Value) => {
        console.log('Success:', values);
        title === '登录' ? login(values) : register(values)
    }

    const register = (values: Value) => {
        axios.post('http://192.168.10.77:8082/api/login/register',
            {
                phone: values.phone,
                password: values.password
            },
            {
                headers: {
                    ' Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(res => {
                if (res.data.status === 500) {
                    message.error(res.data.massage)
                } else {
                    message.success(res.data.massage);
                    setTitle(null)
                }
            })
    }

    const login = (values: Value) => {
        axios.post('http://192.168.10.77:8082/api/login/login',
        {
            phone: values.phone,
            password: values.password
        },
        {
            headers: {
                ' Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            if (res.data.status === 500) {
                message.error(res.data.massage)
            } else {
                message.success(res.data.massage);
                localStorage.setItem('token', res.data.token)
                setTitle(null)
            }
        })
    }

    const token = localStorage.getItem('token')

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            { token ?
                <UploadImg avatar={true}></UploadImg> :
            <div>
                <div style={{ fontSize: 20, cursor: 'pointer' }} onClick={()=>showModal('登录')}>登录</div>
                <div style={{fontSize: 20,marginLeft: 10,marginRight:10}}>|</div>
                <div style={{ fontSize: 20, cursor: 'pointer' }} onClick={()=>showModal('注册')}>注册</div>
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

