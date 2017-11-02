import React from 'react';

const Image = props => {
  const {src, height} = props;
  return (
    <img
      src={src}
      height={height}
    />
  );
};

export default Image;
