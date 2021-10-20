import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreyLine = styled.div`
  background-color: #e9f0f5;
  width: 100%;
  height: 0.4rem;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: ${(props) => props.width}%;
    height: 0.4rem;
    top: 30%;
    background-color: #35a0ee;
  }
`;

export const Divider = styled.div`
  position: absolute;
  top: -5px;
  width: 3px;
  height: 15px;
  background-color: ${(props) => props.backgroundColor};
  left: ${(props) => props.leftPosition}%;
  ::after {
    content: "$${(props) => props.numbersContent}";
    position: relative;
    top: 3rem;
    right: 1rem;
    color: #a1afb8;
    color: ${(props) => props.color};
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;

export const FromBlueSquare = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #35a0ee;
  border-radius: 1px;
  top: -5px;
  left: ${(props) => props.leftSquareFrom}%;
  z-index: 10;
`;

export const ToBlueSquare = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #35a0ee;
  border-radius: 1px;
  left: ${(props) => props.leftSquareTo}%;
  top: -5px;
  z-index: 10;
`;
