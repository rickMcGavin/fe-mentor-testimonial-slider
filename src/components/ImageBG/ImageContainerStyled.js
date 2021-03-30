import styled, { css } from "styled-components";

const ImageContainerStyled = styled.div`
${({ theme = {} }) => {
  const { breakpoint = '', colors = {} } = theme;
  return css`
    background-image: url('/pattern-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    min-height: 308px;
    min-width: 327px;
    overflow-x: hidden;
    padding: 32px;

    .photo {
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 5px;
      box-shadow: 0px 16px 16px 16px rgba(71, 63, 185, 0.05);
      display: inline-block;
      height: 255px;
      position: absolute;
      width: 255px;
    }

    .photo.tanya {
      background-image: url('/image-tanya.jpg');
    }

    .photo.john {
      transform: translateX(255px);
      background-image: url('/image-john.jpg');
    }
  `;
}}
`;

export default ImageContainerStyled;
