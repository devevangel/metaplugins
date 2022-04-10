import React from "react";

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="myVideo">
      <source
        src="https://res.cloudinary.com/devevangel/video/upload/v1649634453/metaplugin/assets/video_bg_lidnue.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default BackgroundVideo;
