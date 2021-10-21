import styled from "styled-components";

export const LabelStyle = styled.label`
  background: ${(props) =>
    props.activeLabelBackground ? " #F6FBFF" : " #FFF"};
  border: 1.5px solid ${(props) => (props.activeLabel ? "#35A0EE" : "#D5D9DC")};
  box-shadow: 0px 0px 20px rgba(213, 217, 220, 0.05);
  border-radius: 0.4rem;
  width: 13.6rem;
  height: 14.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem;
  cursor: pointer;
`;

export const InputStyle = styled.input`
  align-self: flex-start;
  border: 1.5px solid
    ${(props) => (props.activeCheckbox ? "#35A0EE" : "#DDDDDD")};
  border-radius: 2px;
  margin: 1rem;
  width: 1.6rem;
  height: 1.6rem;
`;

export const TextSpanStyle = styled.span`
  padding: 1rem;
  color: ${(props) => (props.activeSpanColor ? "#35A0EE" : "#031106")};
  font-family: Montserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.02em;
`;
