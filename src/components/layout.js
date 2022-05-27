/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/react'
import Nav from './nav'
import Footer from './footer'
import Terms from './terms'
// import { CookiesProvider, useCookies } from 'react-cookie'
// import Footer from './footer'


const Layout = ({ children, pageLocation, hideFooter, invertNav}) => {
    console.log("layout props", pageLocation)

    const [termsValue, setTermsValue] = useState(false);
    // useEffect(() => {
    //     if (typeof window !== "undefined" && window.document){
    //         var tValue;
    //         {document.cookie.split(';').some((item) => item.trim().startsWith('termsAccepted=')) ? 
    //         tValue = document.cookie.split('; ').find(row => row.startsWith('termsAccepted=')).split('=')[1] : 
    //         document.cookie = "termsAccepted=false" }
    //         setTermsValue(tValue)
    //         console.log("terms value use effect: " + termsValue)
    //         console.log("document cookie: " + document.cookie)
    //     }
    // })
    // console.log("terms after: " + termsValue)
    
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <div>
      <Helmet htmlAttributes={{lang: 'en'}}>
            <meta charSet="utf-8" lang="en"/>
            <meta name="description" content={data.site.siteMetadata.description}/>
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              background: white;
              min-height: '100vh';
              max-width: '100vw';
              overflow-x: 'hidden';
              white-space: 'nowrap';
              font-family: seguo-ui, visby, sans-serif;
            }
          `}
        />
        {/* {(typeof window !== "undefined" && window.document) ? (termsValue !== "true" ?  <Terms/> : null ) : null} */}
        {termsValue !== "true" ?  <Terms/> : null }
        
        <Nav pageLocation={pageLocation} invertNav={invertNav}/>
        <main>{children}</main>
        <Footer hideFooter={hideFooter}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
