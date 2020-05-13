import React from 'react';
import Lottie from 'react-lottie';
import Email from '../../assets/lf30_editor_v5ejNg.json';

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Email
  };

  return <Lottie options={defaultOptions} height={150} />;
};

export default Animation;
