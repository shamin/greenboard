import React, { Component } from 'react'
import _ from "lodash"
import RehypeReact from 'rehype-react'
import Pre from './pre'

const renderAst = (codeBlocks) => {
  return new RehypeReact({
    createElement: React.createElement,
    components: {
      'pre': Pre(codeBlocks)
    },
  }).Compiler;
}

export default class Contents extends Component {
  render() {
    const { docs } = this.props
    const codeBlocks = parseDocs(docs)
    console.log(docs.htmlAst)
    return (
      <div>
        {renderAst(codeBlocks)(docs.htmlAst)}
      </div>
    )
  }
}

const parseDocs = (docs) => {
  let codeBlock = {}
  const codeBlocks = []
  docs.htmlAst.children.forEach((e) => {
    if (_.includes(["h1", "h2", "h3"], e.tagName)) {
      if (!_.isEmpty(codeBlock)) {
        codeBlocks.push(codeBlock)
      }
      codeBlock = {}
    } else if (_.includes(["pre"], e.tagName)) {
      let property = fetchChildType(e)
      codeBlock[property] = e
    }
  })
  return codeBlocks
}

const fetchChildType = (code_block) => {
  if (code_block.children[0].properties.className === undefined)
    return false
  return code_block.children[0].properties.className[0]
}
