import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1440px) {
    height: 90%;
    padding: 3rem;
  }
`;

export const ContainerTitleText = styled.div`
  width: 80%;

  :last-child {
    margin-top: 6rem;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 36px;
  letter-spacing: 0.2px;
  margin-bottom: 2rem;
`;

export const TitlePrivacy = styled.h1`
  font-family: Montserrat Alternates;
  padding-bottom: 1rem;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

export const Description = styled.div`
  padding-bottom: 1rem;
  font-weight: 500;
  color: #a4aeb4;
  word-wrap: break-word;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
`;

export const ExpandPrivacy = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  color: #2696e8;
`;
