import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 90vh;
  width: 100%;
  padding: 1.5rem;
  @media only screen and (max-width: 1440px) {
  }
`;

export const ContainerRight = styled.div`
  background-color: #fff;
  width: 65%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    width: 70%;
  }
`;

export const ContainerLeft = styled.div`
  width: 35%;
  background-color: #35a0ee;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    width: 30%;
  }
`;
