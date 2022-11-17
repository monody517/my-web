import React, { useRef } from 'react';
import { message, Popover} from 'antd';
import './index.css';
import ReactDOM from 'react-dom';
import {uploadAvr, uploadImg} from "../../service/image";

function UploadImg(props:any) {
  const fileRef = useRef(ReactDOM);

  const handleClick = () => {
    //console.log('点击按钮主动调用input框',this.fileInput.click())
    //需要获取真实的dom元素的点击事件，而不是react实例
    // @ts-ignore
    fileRef.current.click()
  };

  const saveData = () => {
    // 使用formData上传
    let formData = new FormData()
    // @ts-ignore
    const currentFile = fileRef.current.files[0];
    formData.append('file', currentFile, currentFile.name);
    formData.append('fileName', currentFile.name);
    // @ts-ignore
    const imgUrl = formData.get('fileName')?.split('.')[0]
    props.avatar === true ?
      uploadAvr({ imgUrl,phone: props.phone }).then(response => {
      console.log(response);
      if (response.status === 200) {
        message.success('add data success');
      }
    })
    :
      uploadImg(formData).then(response => {
    console.log(response);
    if (response.status === 200) {
      message.success('add data success');
      props.getList()
    }
    })
  }

  return (
    <div className='upload' onClick={handleClick}>
      {
        props.avatar === true ?
          <Popover placement="bottom" content={<a onClick={(e)=> {
            message.success('退出成功')
            localStorage.removeItem('userInfo')
            props.changeLogin()
            e.stopPropagation()
          }}>退出登录</a>} trigger="hover">
            <div className='avatar'>上传头像</div>
          </Popover>
          :
            <div className="upload-click">
              上传图片
            </div>
      }

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
