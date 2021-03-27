import React from "react"
import Layout from "../components/layout"
import About from "./about-css-modules"
import ContactForm from "./ContactForm"

export default function Home() {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <About />
      <ContactForm />
    </Layout>
  )

}
