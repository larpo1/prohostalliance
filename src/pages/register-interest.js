import React from 'react'
import HubspotMeeting from "../components/hubspot-meeting-widget"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'

const RegisterInterestPage = () => (

    <Layout>
 <section className="hero is-fullheight home">
   <div className="hero-head">
     <Navbar />
   </div>
  <div className="hero-body">
    <div className="container has-text-centered">
    <HubspotMeeting />
    </div>
  </div>
 </section>    </Layout>

)

export default RegisterInterestPage