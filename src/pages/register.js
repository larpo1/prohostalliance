import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <h1>Membership</h1>
              <p>The more members we have, the stronger our voice, and the faster we can build an industry with genuine social and economic impact.</p>
              <p>If you are a short-term rental operator or property manager, we invite you to apply for membership by submitting the form below. A member of our team will be in touch within 7 days to validate that you meet our membership criteria and complete your registration.</p></div>
                <div className="column">
                <h1>It's free to join. Apply now.</h1>
                <form
                name="register"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="register" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'phone'}>
                    Phone
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'phone'}
                      onChange={this.handleChange}
                      id={'phone'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'company'}>
                    Company
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company'}
                      onChange={this.handleChange}
                      id={'company'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'properties'}>
                    Properties Under Management
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'number'}
                      name={'properties'}
                      onChange={this.handleChange}
                      id={'properties'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Apply
                  </button>
                </div>
              </form>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
