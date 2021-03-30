import { animated, useSpring, interpolate } from 'react-spring';
import ImageContainerStyled from './ImageContainerStyled';
import Frame from './Frame';

const ImageBG = ({ active }) => {

  const { x, altX } = useSpring({
    x: active ? 255 : 0,
    altX: active ? 0 : 255
  });

  return (
    <ImageContainerStyled>
      <Frame>
        <animated.div
          style={{
            transform: interpolate([x], (x) => `translateX(-${x}px)`)
          }}
          className="photo tanya"
        />
        <animated.div
          className="photo john"
          style={{
            transform: interpolate([altX], (altX) => `translateX(${altX}px)`)
          }}
        />
      </Frame>
    </ImageContainerStyled>
  );
};

export default ImageBG;
