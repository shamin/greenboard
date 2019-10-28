import React, { Component } from 'react'
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Docs from '../components/docs'
import '../stylesheets/style.scss'
import '../stylesheets/prism-dracula.css'

export default class DocTemplate extends Component {
  render() {
    const docsData = this.props.data.markdownRemark
    return (
      <React.Fragment>
        <Helmet
          title={docsData.frontmatter.title}
          meta={[
            { name: 'description', content: docsData.frontmatter.title },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Docs docs={docsData} />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: {ne: "docs/index.md"}) {
      html
      htmlAst
      frontmatter {
        language_tabs
        title
        footer
        search
        attachments {
          publicURL
        }
      }
    }
  }  
`
