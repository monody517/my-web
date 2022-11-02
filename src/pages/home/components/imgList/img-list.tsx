import React from 'react'
import { Image } from 'antd';
import './img-list.css'

interface Props {
    img: string[],
    deleteImg: Function
}

export function ImgList(props:Props) {
    

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap' }}>
                {
                    props.img.map((item: string, index: number) => {
                        return (
                            <div className='img' key={index}>
                                <Image
                                    src='http://192.168.10.77:8082/shan_chu_18422d9377c.png'
                                    onClick={() => props.deleteImg(item)}
                                    preview={false}
                                    className='delete' />
                                <Image src={item} style={{ width: 120, height: 120 }} />
                            </div>
                        )
                    })
                }
                
            </div>
    )
}
