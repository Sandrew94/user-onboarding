import styled from "styled-components";

//Wrapper

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1440px) {
    margin: auto 0.5rem;
  }
`;

export const WrapperSquare = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  position: relative;
  margin-top: 4rem;
`;

//Square style

export const FirstSquare = styled.span`
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  z-index: 8;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  margin-right: 1rem;
`;

export const SecondSquare = styled.span`
  z-index: 5;
  top: 13%;
  left: 13%;
  position: absolute;
  border-radius: 4px;
  padding: 0.6rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 8px solid #35a0ee;
  background-color: ${(props) => props.backgroundColor};
`;

//Rectangle divider

export const FirstRectangle = styled.span`
  position: absolute;
  top: 240%;
  width: 0.4rem;
  height: 0.9rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  clip-path: inset(0 24% 0 13% round 5%);
  background-color: ${(props) => props.backgroundColor};
`;

export const SecondRectangle = styled.span`
  position: absolute;
  top: 380%;
  clip-path: inset(0 24% 0 13% round 5%);
  width: 0.4rem;
  height: 0.9rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  clip-path: inset(0 24% 0 13% round 5%);
  background-color: ${(props) => props.backgroundColor};
`;

//Text styling

export const WrapperText = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.5rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
