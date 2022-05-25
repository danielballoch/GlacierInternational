/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
    
    // const [cookies, setCookie] = useCookies(['accepted']);
    // setCookie('accepted', false);
    //create variable to show/hide terms, check cookie exists, if not create cookie, if so set var as cookie. *should be state?
    var termsValue = false;
    {document.cookie.split(';').some((item) => item.trim().startsWith('termsAccepted=')) ? 
    termsValue = document.cookie.split('; ').find(row => row.startsWith('termsAccepted=')).split('=')[1] : 
    document.cookie = "termsAccepted=false" }
    console.log(termsValue)
    console.log(document.cookie)
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
      {/* <CookiesProvider> */}
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
            }
          `}
        />
        {termsValue === "true" ?  null : <Terms/>}
        {/* <Terms/> */}
        <Nav pageLocation={pageLocation} invertNav={invertNav}/>
        <main>{children}</main>
        <Footer hideFooter={hideFooter}/>
        {/* </CookiesProvider> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
