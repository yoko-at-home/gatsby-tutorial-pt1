import React from "react"
import { NetlifyForm, Honeypot } from "react-netlify-forms"
import { useForm } from "react-hook-form"

import "./styles.module.css"
import { navigate } from "gatsby-link"

function ContactForm() {
  const { errors, register, handleSubmit } = useForm()

  return (
    <div>
      <NetlifyForm
        name="Contact"
        action="/thanks"
        honeypotName="bot-field"
        onSuccess={(response, context) => {
          navigate("/thanks")
          console.log("Successfully sent form data to Netlify Server")
          context.formRef.current.reset()
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && (
              <p sx={{ variant: "alerts.success", p: 3 }}>
                Thanks for contacting us!
              </p>
            )}
            {error && (
              <p sx={{ variant: "alerts.muted", p: 3 }}>
                Sorry, we could not reach servers. Because it only works on
                Netlify, our GitHub demo does not provide a response.
              </p>
            )}
            <p className="form__group">
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder={"お名前"}
                onChange={handleChange}
                ref={register({
                  required: true,
                  max: 255,
                  min: 3,
                  maxLength: 80,
                })}
              />
              {errors.name && "名前を入力してください"}
            </p>
            <p className="form__group">
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder={"メールアドレス"}
                onChange={handleChange}
                ref={register({
                  required: true,
                  max: 41,
                  min: 4,
                  maxLength: 255,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && "メールアドレスを入力してください"}
            </p>
            <p className="form__group">
              <textarea
                className="form__input"
                rows="7"
                name="message"
                placeholder={"メッセージ"}
                onChange={handleChange}
                ref={register({
                  required: true,
                  max: 1000,
                  min: 10,
                  maxLength: 7,
                })}
              />
              {errors.message && "メッセージを入力してください"}
            </p>
            <p className="form__group form-submit">
              <div className="form__group">
                <button
                  type="submit"
                  className="btn btn--green"
                  sx={{ variant: "buttons.success" }}
                >
                  Submit
                </button>
                {/* <button type="reset" sx={{ variant: "buttons.danger" }}>
                  Reset
                </button> */}
              </div>
            </p>
          </>
        )}
      </NetlifyForm>
    </div>
  )
}

export default ContactForm
