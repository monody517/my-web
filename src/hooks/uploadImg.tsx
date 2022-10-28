import React, { useState, useRef } from 'react';
import './index.css';
import axios from 'axios';

function CreateTask () {
  const [title, setTitle] = useState('');
  const file = useRef(null);

  const saveData = () => {
    // 使用formData上传
    let formData = new FormData()
    const currentFile = file.current.files[0];
    formData.append('avatar', currentFile, currentFile.name);
    // let config = {
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // };
    console.log('currentFile',currentFile)
    formData.append('title', title);
    axios.post('http://192.168.10.77:8082/api/upload', formData).then(response => {
      console.log(response);
      if (response.status === 200) {
        alert('add data success');
        window.location.href = '/'
      }
    })
  }
  return (
    <div className="App">
      <div className="f1">
        <span className="input-title">task type</span>
        <input type="file" name="avatar" ref={file} />
      </div>
      <div className="save">
        <button className="save-btn" onClick={saveData}>Save</button>
      </div>
    </div>
  );
}

export default CreateTask;