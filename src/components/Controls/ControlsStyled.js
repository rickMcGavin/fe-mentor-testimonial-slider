import styled, { css } from 'styled-components';

const ControlsStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
      align-items: center;
      background-color: ${colors.white};
      border-radius: 20px;
      display: flex;
      height: 38px;
      justify-content: space-between;
      margin: -52px auto 0;
      padding: 0 16px;
      position: relative;
      z-index: 1;
      width: 78px;
    `;
  }}
`;

export default ControlsStyled;
