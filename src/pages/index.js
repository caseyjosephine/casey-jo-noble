import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home.">
      <p>Welcome to my personal website.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/casey-jo-noble-napa-wine-pro.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage