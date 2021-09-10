import React, { useState } from "react";

export default function ContactDetail() {
  return (
    <div className="contact-details">
      <h1 className="contact-details__title">Contact details</h1>
      <span className="contact-details__title-text">
        Welcome to United Properties, we are glad to see you! Let’s get started
        by letting us know a little bit about you
      </span>
      <div className="contact-details__name-phone">
        <span className="contact-details__full-name">Full name</span>
        <label htmlFor="full-name">
          <input type="text" name="full-name" id="full-name" />
        </label>
        <label htmlFor="phoneNumber">
          <input type="text" name="phoneNumber" />
        </label>
      </div>
      <span className="contact-details__email">E-mail address</span>
      <label htmlFor="email">
        <input type="text" name="email" />
      </label>
      <span className="contact-details__country">Country</span>
      <label htmlFor="country">
        <input type="text" name="country" />
      </label>
    </div>
  );
}
