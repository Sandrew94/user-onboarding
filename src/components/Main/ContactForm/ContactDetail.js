import React from "react";
import ContactFormInput from "./ContactFormInput/ContactFormInput";
import {
  Wrapper,
  ContainerTitleText,
  Title,
  Description,
  ExpandPrivacy,
  TitlePrivacy,
} from "./ContactDetail.style";

export default function ContactDetail() {
  return (
    <Wrapper>
      <ContainerTitleText>
        <Title>Contact details</Title>
        <Description>
          Welcome to United Properties, we are glad to see you! Let’s get
          started by letting us know a little bit about you
        </Description>
      </ContainerTitleText>
      <ContactFormInput />

      <ContainerTitleText>
        <TitlePrivacy>Privacy Policy</TitlePrivacy>
        <Description>
          We know you care about how your personal information is used and
          shared, so we take your privacy seriously
        </Description>

        <ExpandPrivacy> Expand privacy policy &#8594;</ExpandPrivacy>
      </ContainerTitleText>
    </Wrapper>
  );
}
