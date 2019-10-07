import React from "react"
import Navigation from './Nav.jsx'
import Hero from './Hero.jsx'
import { graphql } from "gatsby"

const LandingPage = ({ data: { prismicLandingPage } }) => {
  const { data } = prismicLandingPage
  if (!data) return
  return (
    <div className='container'>
      <div className='row'>
        <Navigation />
      </div>
      {data.contentArea[0] && (
        <React.Fragment>
          <div class='row'>
            <Hero image={data.hero_image_src} />
            <h1 dangerouslySetInnerHTML={{ __html: data.contentArea[0].header.html}} />
          </div>
          <div className='row'>
            <div dangerouslySetInnerHTML={{ __html: data.contentArea[0].content.html }} />
          </div>
        </React.Fragment>
      )}
      {data.contentArea[1] && (
        <React.Fragment>
          <div className='row'>
            <h2 dangerouslySetInnerHTML={{ __html: data.contentArea[1].header.html}} />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data.contentArea[1].content.html }} />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPageBySlug($uid: String!) {
    prismicLandingPage(uid: { eq: $uid }) {
      uid
      data {
        contentArea {
          header {
            html
            text
          }
          content {
            html
            text
          }
        }
        hero_image_src
      }
    }
  }
  `