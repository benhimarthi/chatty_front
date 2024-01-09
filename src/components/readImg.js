import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePageStyle.css';

const YourComponent = (data) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
    formData.append('id', String(data.data['id'])); //String(data.data['id'])
    formData.append('ind', data.data['ind']); //data.data['ind']
    
        const response = await axios.post('http://localhost:8084/api/user/get_image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
          responseType: 'arraybuffer',
        });
        if (response.status !== 200) {
          console.error('Error fetching image:', response.statusText);
          return;
        }

        const base64String = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        setImage(`data:image/jpeg;base64,${base64String}`);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Ensure the useEffect runs only once

  return (
    <div>
      {
        //image && <img src={image} alt="User Image" />
       data.data['prof_pic']===1?
      image&&<img src={image} alt="User Image" class="profil_pic" />:
      image&&<img src={image} alt="User Image"/>//class="profil_pic"
    }
    </div>

  );
};

export default YourComponent;

