import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.2rem;
  margin-bottom: 4rem;
  margin-right: 4rem;
`;

export const TitleBig = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: 0.2px;
`;

export const TitleSmall = styled.span`
  font-weight: 500;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  color: #a4aeb4;
  padding-top: 1.5rem;
`;
////////////////////////////////////////////////////////////////

export const TitlePlanninng = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  margin-bottom: 4rem;
  margin-left: 1rem;
`;

export const TitleMedium = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 2.1rem;
  line-height: 2.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

////////

export const MoneyInputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const LabelWrapper = styled.label`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :last-child {
    margin-left: 2rem;
  }
`;

export const SpanText = styled.span`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${(props) => props.clickedColor};
`;

export const InputStyle = styled.input`
  font-family: Montserrat;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
  border: none;
  outline: none;
  border-bottom: 2px solid ${(props) => props.borderColor};

  :focus {
    border-bottom: 2px solid #35a0ee;
  }
`;
////////////////////////////////////////////////////////////////

export const FooterWrapper = styled.div`
  margin-top: 3rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 1440px) {
    width: 85%;
  }
`;

export const InvestitorTitle = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.8rem;
  padding-bottom: 4rem;
`;

export const ButtonWrapper = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: flex;
  justify-content: space-between;
  width: 52%;
  @media only screen and (max-width: 1440px) {
    width: 70%;
    margin: auto 2;
  }
`;

export const ButtonLabel = styled.label`
  padding: 1.5rem 3rem;
  border-radius: 4px;
  border: 2px solid #d5d9dc;
  ${(props) => {
    if (props.active === "activeFirst") {
      return `background: #f7fbff;
  border: 2px solid #35a0ee;`;
    }
  }}
`;

export const SpanCheckmark = styled.span`
  padding: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2px;
  color: ${(props) => props.clickedColor};
`;

export const InputRadio = styled.input`
  transform: scale(1.5);
`;
