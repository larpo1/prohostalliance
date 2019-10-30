import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'

export default () => (
  <Layout>
    <section className="section hero is-fullheight">
      <div className="hero-head">
    <Navbar />
      </div>
      <div className="hero-body">
      <div className="container">
        <div className="content has-text-centered">
          <h1>Thank you!</h1>
          <p>We will contact you soon. </p>
        </div>
      </div>
      </div>
    </section>
  </Layout>
)
