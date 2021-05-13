import React, { useState } from 'react';
import axios from 'axios';

const UploadScreen = () => {
  const [image, setImage] = useState('');

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image-file', file);
    try {
      const config = {
        'Content-Type': 'multipart/form-data',
      };
      const { data } = await axios.post('/api/upload/', formData, config);
      setImage(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="file" name="image-file" id="image-file" onChange={(e) => uploadFileHandler(e)} />
    </div>
  );
};

export default UploadScreen;
