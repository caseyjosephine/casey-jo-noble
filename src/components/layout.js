import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {container,
        heading,
        navbar,
        brandTitle,
        navbarLinks } 
        from './layout.module.css' 

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

    return (
        <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <nav className={navbar}>
          <div className={brandTitle}><Link to="/">Casey Jo Noble</Link></div>
          <div className={navbarLinks}>
            <ul>
              <li>
                <Link to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/photos">
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About</Link></li>
              <li>
                <Link to="/contact">
                  Contact</Link></li>
              <li>
                <Link to="/wine-q-and-a">
                  Wine Q&amp;A</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>   
          {children}
        </main>
      </div>
    )
}

export default Layout