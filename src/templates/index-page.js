import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
 <section className="hero is-fullheight home" 
 style={{
  backgroundImage: `
  linear-gradient(
    rgba(0, 0, 0, 0.45), 
    rgba(0, 0, 0, 0.45)
  ),
  url(${
    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  })`,
  backgroundPosition: `bottom center`,
  backgroundSize: `cover`,
}}>
   <div className="hero-head">
     <Navbar />
   </div>
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="subtitle has-text-light">Welcome to the</p>
      <h1 className="title has-text-light is-size-1">
        Professional Host Alliance
      </h1>
      <h2 className="subtitle has-text-light">
        We are launching soon. In the mean time, please...
      </h2>
      <Link to="/register" className="button is-primary">Register Your Interest</Link>
    </div>
  </div>
 </section>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
