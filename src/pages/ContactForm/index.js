import React, { Component } from "react"
import { NetlifyForm, Honeypot } from "react-netlify-forms"
import { useForm } from "react-hook-form"

import "./styles.module.css"

function ContactForm() {
const { errors, register, handleSubmit } = useForm()
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
            {success && <p>お問い合わせありがとうございます。</p>}
            {error && (
              <p>サーバーに接続できません。時間をおいて再度お試しください。</p>
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
              {errors.name && "お名前の入力をお願いします"}
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
              {errors.email && "メールアドレスの入力をお願いします"}
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
            </p>
            <p className="form__group form-submit">
              <div className="form__group">
                <button type="submit" className="btn btn--green">
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
