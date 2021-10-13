import styled from "styled-components";
import backtipsPhoto from "../../../../assets/images/‘‘.svg";

//Wrapper and container components

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 20px rgba(3, 17, 6, 0.03);
  border-radius: 4px;
  width: 75%;
  height: auto;
  margin-bottom: 5rem;
  margin-left: 6.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 1440px) {
    margin: 4rem auto;
    width: 85%;
  }
`;

export const Backtips = styled.span`
  z-index: 1;
  background-image: url(${backtipsPhoto});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 5.6rem;
  height: 5.6rem;
  top: -15%;
  left: -5%;
  box-shadow: 16px 12px 56px rgba(11, 29, 46, 0.15);
  border-radius: 3px;
  background-color: #fff;
`;

export const VectorLeft = styled.span`
  width: 30%;
  height: 20%;
  top: 0;
  left: 0;
  position: absolute;
  background: #35a0ee;
  clip-path: polygon(100% 0, 0 0, 0 100%);
  opacity: 0.07;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

//TEXT STYLING//

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export const LongText = styled.span`
  font-weight: 500;
  font-style: italic;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  color: #a4aeb4;
`;

export const ContainerQuotesCreator = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuoteCreator = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  line-height: 2.4rem;
  color: #07111b;
`;

export const QuoteCreatorRole = styled.span`
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  line-height: 2rem;
  font-weight: 500;
  color: #a4aeb4;
`;

//LOGO FOOTER RIGHT//

export const FooterLogoContainer = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.5rem;
`;

export const FooterLogo = styled.img`
  padding: 0.5rem;
`;
