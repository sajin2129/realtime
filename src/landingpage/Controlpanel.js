import React, { useState } from 'react';
import "./controlpanel.css";
import convid from './controler.json';

const Controlpanel = () => {
  const { controlfile } = convid ; 
  const [selectedVideo, setSelectedVideo] = useState(controlfile[0].video); 

  const handleButtonClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="controlpan">
      <div className="controlhead dex" data-aos="fade-up" data-aos-duration="2000">
        <h1>Example one Tenant Master Access Control Panel</h1>
      </div>
      <div className="controler" data-aos="fade-up" data-aos-duration="2000">
        {controlfile.map((menu) =>
          <div className='butn' key={menu.id}>
            <button onClick={() => handleButtonClick(menu.video)}>{menu.name}</button>
          </div>
        )}
      </div>
      <div className="controllervid" data-aos="fade-up" data-aos-duration="2000">
        <img src={selectedVideo} alt="video" />
      </div>
    </div>
  );
};

export default Controlpanel;
