import React from "react"
import Layout from "../components/layout"
import About from "./about-css-modules"

export default function Home() {
  return (
    <Layout>
      <div style={{textAlign: 'center'}}>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
        <img
          style={{ borderRadius: "5px", margin: "20px", boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.6)'}}
          src="https://source.unsplash.com/random/400x200"
          alt=""
          />
      </p>
          </div>
      <About />
    </Layout>
  )

}
