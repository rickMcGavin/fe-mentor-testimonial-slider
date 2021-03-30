import styled, { css } from "styled-components";

const ContainerStyled = styled.div`
${({ theme = {} }) => {
  const { breakpoint = '', colors = {} } = theme;
  return css`
    height: 100%;
    margin: 0 auto;
    max-width: 375px;
    padding: 24px;
  `;
}}
`;

export default ContainerStyled;
