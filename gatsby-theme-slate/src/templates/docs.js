import React, { Component } from 'react'
import { graphql } from "gatsby"
import Docs from '../components/docs'

export default class DocTemplate extends Component {
  render() {
    const docsData = this.props.data.allMarkdownRemark.nodes
    return (
      <Docs docs={docsData}/>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        htmlAst
      }
    }
  }
`
