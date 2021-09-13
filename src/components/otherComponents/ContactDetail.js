import React, { useState } from "react";
import Validate from "./Validate";

export default function ContactDetail() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const onChangeHandler = (fieldName, value) => {
    if (fieldName === "full-name") setName(value);
    if (fieldName === "phone-number") setPhone(value);
    if (fieldName === "email") setEmail(value);
    if (fieldName === "country") setCountry(value);
  };

  const inputValidFullName = {
    value: name,
    maxLength: 20,
    allowNumber: false,
    allowStrings: true,
  };

  const inputValidPhoneNumber = {
    value: phone,
    maxLength: 15,
    allowNumber: true,
    allowStrings: false,
  };

  const inputValidEmail = {
    value: email,
    maxLength: 254,
    allowNumber: false,
    allowStrings: true,
    allowEmail: true,
  };

  const inputValidCountry = {
    value: country,
    maxLength: 14,
    allowNumber: false,
    allowStrings: true,
  };

  return (
    <div className="contact-details">
      <div className="contact-details__container">
        <h1 className="contact-details__container-title">Contact details</h1>
        <span className="contact-details__container-title-text padding-top-mid">
          Welcome to United Properties, we are glad to see you! Let’s get
          started by letting us know a little bit about you
        </span>
      </div>
      <div className="contact-details__name-phone padding-top-mid">
        <label
          htmlFor="full-name"
          className="contact-details__name-phone-label"
        >
          <span className="contact-details__full-name">Full name</span>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="contact-details__name-phone-input"
            value={name}
            onChange={(e) => {
              onChangeHandler("full-name", e.target.value);
            }}
          />
          <Validate validateInput={inputValidFullName} />
        </label>
        <label
          htmlFor="phoneNumber"
          className="contact-details__name-phone-label"
        >
          <input
            placeholder="Enter phone number"
            type="text"
            name="phoneNumber"
            className="contact-details__name-phone-input"
            value={phone}
            onChange={(e) => {
              onChangeHandler("phone-number", e.target.value);
            }}
          />
          <Validate validateInput={inputValidPhoneNumber} />
        </label>
      </div>

      <div className="contact-details__email padding-top-mid">
        <span className="contact-details__email-text">E-mail address</span>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            className="contact-details__input-email-country"
            value={email}
            onChange={(e) => {
              onChangeHandler("email", e.target.value);
            }}
          />
          <Validate validateInput={inputValidEmail} />
        </label>
      </div>

      <div className="contact-details__email padding-top-mid">
        <span className="contact-details__email-text">Country</span>
        <label htmlFor="country">
          <input
            type="text"
            name="country"
            className="contact-details__input-email-country"
            value={country}
            onChange={(e) => {
              onChangeHandler("country", e.target.value);
            }}
          />

          <Validate validateInput={inputValidCountry} />
        </label>
      </div>

      <div className="contact-details__container">
        <h1 className="contact-details__container-title bold font-size-title">
          Privacy Policy
        </h1>
        <div className="contact-details__container-title-text padding-top-low">
          We know you care about how your personal information is used and
          shared, so we take your privacy seriously
        </div>
        <span className="contact-details__expand-privacy">
          Expand privacy policy
        </span>
      </div>
    </div>
  );
}
