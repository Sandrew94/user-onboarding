import styled from "styled-components";

export const WrapperNamePhone = styled.div`
  width: 80%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 3rem;
`;

export const LabelNamePhone = styled.label`
  position: relative;
  width: 48%;
`;

export const WrapperEmailCountry = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

////////////////////////////////////////////////////////////////

export const SpanInputDescription = styled.span`
  position: absolute;
  left: 0;
  top: -70%;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: ${(props) => props.clickedColor};
  font-size: 1.4rem;
`;

export const EmailCountrySpanDescription = styled.span`
  margin-top: 2rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 1.4rem;
  color: ${(props) => props.clickedColor};
  margin-bottom: 1rem;
`;

export const InputStyle = styled.input`
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.8rem;
  letter-spacing: 0.2px;
  width: 100%;
  border: 0;
  outline: none;
  border-bottom: 2px solid ${(props) => props.borderColor};
  :focus {
    border-bottom: 2px solid #2696e8;
  }
`;

export const InputSelect = styled.select`
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.8rem;
  letter-spacing: 0.2px;
  width: 100%;
  border: 0;
  outline: none;
  border-bottom: 2px solid ${(props) => props.borderColor};
  :focus {
    border-bottom: 2px solid #2696e8;
  }
`;
