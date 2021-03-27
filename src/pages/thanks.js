import React from "react"
import * as styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

export default function Thanks() {
  return (
    <Container>
      <h1>Thank you!</h1>
      <p>
        お問い合わせありがとうございます。近日中の折り返しご連絡いたします。by
        Aya
      </p>
    </Container>
  )
}
