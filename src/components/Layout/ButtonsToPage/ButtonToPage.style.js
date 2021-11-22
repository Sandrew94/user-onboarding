import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem 5rem 5rem;

  @media only screen and (max-width: 1460px) {
    padding: 0 0 1rem 0;
  }
`;

export const EmptyDivDivider = styled.div``;

export const BtnBackHomepage = `border: none;
background-color: #fff;
color: #35a0ee;`;

export const skipForNowStyle = `
background-color: rgba(53, 160, 238, 0.1);
color: #35a0ee;
`;

export const nextStepStyle = `
background-color: #35a0ee;
color: #fff;
margin-left: 3rem;
@media only screen and (max-width: 1000px) {
  margin-left: 1rem;
}

`;

export const backgroundColorDisabledStyle = `
background-color: #2ca0f2b1;
`;
