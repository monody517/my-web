import React, { useState, useRef } from 'react';
import { Image, message } from 'antd';
import './index.css';
import axios from 'axios';
import ReactDOM from 'react-dom';

function UploadImg(props:any) {
  const [title, setTitle] = useState('');
  const fileRef = useRef(ReactDOM);

  const handleClick = () => {
    //console.log('点击按钮主动调用input框',this.fileInput.click())
    //需要获取真实的dom元素的点击事件，而不是react实例
    fileRef.current.click();
  };

  const saveData = () => {
    // 使用formData上传
    let formData = new FormData()
    const currentFile = fileRef.current.files[0];
    formData.append('file', currentFile, currentFile.name);
    formData.append('title', title);
    axios.post('http://192.168.10.77:8082/api/upload', formData).then(response => {
      console.log(response);
      if (response.status === 200) {
        message.success('add data success');
        props.getList()
      }
    })
  }
  return (
    <div className='upload' onClick={handleClick}>
        <div className="upload-click">
          上传图片
        </div>
        <input
          id="file"
          type="file"
          name="file"
          ref={fileRef}
          accept="image/*"
          onChange={saveData}
          style={{ display: "none" }}
        />
    </div>
  );
}

export default UploadImg;