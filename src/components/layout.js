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


const Layout = ({ title, children, pageLocation, hideFooter, invertNav}) => {

    // const [termsValue, setTermsValue] = useState(false);
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
            <title>{title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Open+Sans&display=swap" rel="stylesheet"/> 
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
              /* font-family: seguo-ui, visby, sans-serif; */
              font-family: open-sans;
              h1, h2 {
                font-family: 'Heebo', sans-serif;
                color: #111111;
              }
              p {
                  font-family: "Open Sans";
                  color: #050505;
              }
            }
          `}
        />
        {/* {(typeof window !== "undefined" && window.document) ? (termsValue !== "true" ?  <Terms/> : null ) : null} */}
        {/* {termsValue !== "true" ?  <Terms/> : null } */}
        <Terms/>
        
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
