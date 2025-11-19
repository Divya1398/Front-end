import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjZtG0SURPkJcSTwIeBRD-M4hL3ySCNKNl3A2MOXh4KjudavX00HatyOYEcLhQPDk6xPqkgUjlxfdhgNW8JNZPfdKpHtlnxvJ5rplxzDpuuaS5QQZxG3j5z1S0mhCrDiru1fc38beci7YrAf4lxck0U-3ivFeofId_n9OXXYYFJP1LEM46sob3dTWs94iRpGBcw6vw2NuSk7GISENUKsphxe9MjvvcfYQemLa4-CNEc9VSbE4xsHELhkPkcY5GMDbvVP6sYAx58YYtaM9hRNxwM1n2j_2mh5YzT4Je_&lib=ML1G0Xk_A6ATAkXyxiSt2BoNUVsYovjAZ');
        setPhotos(res.data);  
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Photo Gallery</h1>
      <div className="row">
        {photos.map((photo, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img 
                src={photo.link} 
                alt={photo.cc} 
                className="card-img-top" 
                style={{height: '200px', objectFit: 'cover'}} 
              />
              <div className="card-body">
                <h5 className="card-title">{photo.cc}</h5>
                <p className="card-text">Photographer: {photo.photographer || 'Unknown'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
