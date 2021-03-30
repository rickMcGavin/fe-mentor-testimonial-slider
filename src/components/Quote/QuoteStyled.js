import styled, { css } from 'styled-components';

const QuoteStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
        background-image: url('/pattern-quotes.svg');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 20%;
        position: relative;
        overflow-x: hidden;
        height: 300px;
      .quote {
        margin-top: 32px;
        padding-top: 32px;
        position: absolute;

        p {
          font-size: 1.125rem;
          font-weight: 300;
          text-align: center;
        }
      }

      .attribution {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 18px;

        .name {
        }

        .title {
          color: ${colors.primary[300]};
          font-size: 0.875rem;
        }
      }
    `;
  }}
`;

export default QuoteStyled;
