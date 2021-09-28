import React from "react";
import ContactForm from "./ContactForm";

export default function ContactDetail() {
  return (
    <div className="contact-details">
      <div className="contact-details__container">
        <h1 className="contact-details__container-title">Contact details</h1>
        <span className="contact-details__container-title-text padding-top-mid">
          Welcome to United Properties, we are glad to see you! Let’s get
          started by letting us know a little bit about you
        </span>
      </div>
      <ContactForm />

      <div className="contact-details__container">
        <h1 className="contact-details__container-title bold font-size-title">
          Privacy Policy
        </h1>
        <div className="contact-details__container-title-text padding-top-low">
          We know you care about how your personal information is used and
          shared, so we take your privacy seriously
        </div>
        <span className="contact-details__expand-privacy">
          Expand privacy policy &#8594;
        </span>
      </div>
    </div>
  );
}
