import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
  <Layout pageTitle="Home.">

    <div class="hero">
      <div class="hero-text">
        <h1>Cheers 🥂 I'm Casey Jo.</h1>
        <p>description</p>
      </div>
      <div class="hero-image">
       <p>Picture of me</p>
      </div> 
    </div>

    <div class="value-prop">
      <blockquote>This is what you'll get from being here.</blockquote>
    </div>
    <div class="featured-blog-posts">
      <h1>Featured Blog Posts</h1>
      <div>Post 1</div>
      <div>Post 2</div>
      <div>Post 3</div>
    </div>
    <div class="featured-photos">
      <h1>Featured Photos</h1>
      <p>Now for sale for the low, low price of 1000 words.</p>
    </div>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../assets/images/casey-jo-noble-napa-wine-pro.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
