import React, { Component } from 'react'
import _ from "lodash"

export default class Docs extends Component {
  render() {
    const { docs } = this.props
    parseDocs(docs[0])
    return (
      <div>
        <div>Sidebar</div>
        <div>docs</div>
      </div>
    )
  }
}

const parseDocs = (docs) => {
  let codeBlock = {}
  const codeBlocks = []
  docs.htmlAst.children.forEach((e)=>{
    if(_.includes(["h1", "h2", "h3"], e.tagName)) {
      if(!_.isEmpty(codeBlock)) {
        codeBlocks.push(codeBlock)
      }
      codeBlock = {}
    } else if(_.includes(["pre"], e.tagName)) {
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
