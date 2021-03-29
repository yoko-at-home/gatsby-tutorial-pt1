import React from "react"
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms"
import { useForm } from "react-hook-form"

import "./styles.module.css"

export default function ContactForm() {
  const { register, handleSubmit, reset, errors } = useForm({ mode: "onBlur" })
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server")
    },
  })
  const onSubmit = data => netlify.handleSubmit(null, data)

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <div>
      <div className="book__form">
        <div className="u-margin-bottom-medium">
          <h2 className="heading-secondary" style={{ fontSize: "4rem" }}>
            お問い合わせ
          </h2>
        </div>
      </div>
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          <Honeypot />
          {netlify.success && <p>お問い合わせありがとうございます。</p>}
          {netlify.error && (
            <p>サーバーに接続できません。時間をおいて再度お試しください。</p>
          )}
          <p className="form__group">
            <div className="form__input">
              {errors.name && "入力してください"}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              ref={register({
                required: "入力してください",
                max: 255,
                min: 5,
                maxLength: 80,
              })}
              placeholder={"お名前"}
              className="form__input"
            />
          </p>
          <p className="form__group">
            <div className="form__input">
              {errors.email && "入力してください"}
            </div>
            <input
              placeholder="メールアドレス"
              type="email"
              name="email"
              id="email"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid email address",
                },
              })}
              className="form__input"
            />
          </p>
          <p className="form__group">
            <div className="form__input">
              {errors.message && "入力してください"}
            </div>
            <textarea
              className="form__input"
              rows="7"
              id="message"
              name="message"
              placeholder={"メッセージ"}
              ref={register({ required: true, maxLength: 1000 })}
            />
          </p>
          <p className="form__group form-submit">
            <div className="form__group">
              <button type="submit" className="btn btn--green" ref={register}>
                送 信
              </button>
              <button
                type="reset"
                onClick={() => reset()}
                className="btn btn--green"
              >
                リセット
              </button>
            </div>
          </p>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </div>
  )
}
