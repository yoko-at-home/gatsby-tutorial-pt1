import React, { Component } from "react"
import { NetlifyForm, Honeypot } from "react-netlify-forms"

import "./styles.module.css"

function ContactForm() {

  return (
    <div>
      <NetlifyForm
        name="Contact"
        action="/thanks"
        honeypotName="bot-field"
        onSuccess={(response, context) => {
          console.log("Successfully sent form data to Netlify Server")
          context.formRef.current.reset()
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Thanks for contacting us!</p>}
            {error && (
              <p>
                Sorry, we could not reach our servers. Please try again later.
              </p>
            )}
            <p className="form__group">
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder={"お名前"}
                onChange={handleChange}
              />
            </p>
            <p className="form__group">
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder={"メールアドレス"}
                onChange={handleChange}
              />
            </p>
            <p className="form__group">
              <textarea
                className="form__input"
                rows="7"
                name="message"
                placeholder={"メッセージ"}
                onChange={handleChange}
              />
            </p>
            <p className="form__group form-submit">
              <div className="form__group">
                <button
                  type="submit"
                  className="btn btn--green"
                >
                  送信
                </button>
              </div>
            </p>
          </>
        )}
      </NetlifyForm>
    </div>
  )
}

export default ContactForm
