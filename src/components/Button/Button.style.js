import styled from "styled-components";

export const BtnStyle = styled.button`
  font-family: "Monserrat", sans-serif;
  font-style: normal;
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${(props) => props.backToHomepage}
  ${(props) => props.skipForNow}
  ${(props) => props.nextStep}
  ${(props) => props.backgroundColorDisabled}
  @media only screen and (max-width: 1000px) {
    font-size: 1.4rem;
  }
`;
