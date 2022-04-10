import React from "react";

import video from "../assets/video/video_bg.mp4";

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
