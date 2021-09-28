import React, { useState } from "react";
import Validate from "./Validate";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  //
  const [isActive, setActive] = useState("");
  const [isActiveEmail, setActiveEmail] = useState("");
  const [isActiveCountry, setActiveCountry] = useState("");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleToggleEmail = () => {
    setActiveEmail(!isActiveEmail);
  };

  const handleToggleCountry = () => {
    setActiveCountry(!isActiveCountry);
  };

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
    <>
      <div className="contact-details__name-phone padding-top-mid">
        <label
          htmlFor="full-name"
          className="contact-details__name-phone-label"
        >
          <span
            className={`contact-details__full-name ${
              isActive ? "colorBlue" : ""
            }`}
          >
            Full name
          </span>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="contact-details__name-phone-input"
            value={name}
            onClick={handleToggle}
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
            onClick={handleToggle}
            onChange={(e) => {
              onChangeHandler("phone-number", e.target.value);
            }}
          />
          <Validate validateInput={inputValidPhoneNumber} />
        </label>
      </div>
      <div className="contact-details__email padding-top-mid">
        <span
          className={`contact-details__email-text margin-0 ${
            isActiveEmail ? "colorBlue" : ""
          }`}
        >
          E-mail address
        </span>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            className="contact-details__input-email-country"
            value={email}
            onClick={handleToggleEmail}
            onChange={(e) => {
              onChangeHandler("email", e.target.value);
            }}
          />
          <Validate validateInput={inputValidEmail} />
        </label>
      </div>
      <div className="contact-details__email padding-top-mid">
        <span
          className={`contact-details__email-text ${
            isActiveCountry ? "colorBlue" : ""
          }`}
        >
          Country
        </span>
        <label htmlFor="country">
          <select
            type="text"
            name="country"
            className="contact-details__input-email-country"
            value={country}
            onClick={handleToggleCountry}
            onChange={(e) => {
              onChangeHandler("country", e.target.value);
            }}
          >
            <option value=""></option>
            <option value="italy">Italia</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <Validate validateInput={inputValidCountry} />
        </label>
      </div>
    </>
  );
}
