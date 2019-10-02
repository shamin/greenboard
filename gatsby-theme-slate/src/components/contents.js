import React, { Component } from 'react'
import _ from "lodash"
import RehypeReact from 'rehype-react'

const renderAst = (code_blocks) => {
  return new RehypeReact({
    createElement: React.createElement,
    components: {

    },
  }).Compiler;
}

export default class Contents extends Component {
  render() {
    const { docs } = this.props
    // parseDocs(docs)
    console.log(docs.htmlAst)
    return (
      <div>
        {renderAst(0)(docs.htmlAst)}
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
  console.log(codeBlocks)
}

const fetchChildType = (code_block) => {
  if (code_block.children[0].properties.className === undefined)
    return false
  return code_block.children[0].properties.className[0]
}
