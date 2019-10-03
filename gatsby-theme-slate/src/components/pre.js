import React from 'react'
import _ from 'lodash'
import Code from './code'

export default function PreContainer(codeBlocks, elementsRendered, updateRendered, language) {
  return (props) => {
    const codeIndex = codeBlocks.findIndex((code, index) =>
      compareCodeBlockAndAst(code[props.children[0].props.className], props)
      && !_.includes(elementsRendered, index))
    const codes = codeBlocks[codeIndex]
    updateRendered(codeIndex)
    if (codeIndex > -1) {
      return <div>
        {(codes !== undefined) ?
          <Code codes={codes} language={language}/> : "Nothing"}
      </div>
    }
    return <div></div>
  }
}

const compareCodeBlockAndAst = (codeBlock, ast) => {
  if (codeBlock !== undefined && ast !== undefined)
    return codeBlock.children[0].children[0].value === ast.children[0].props.children[0]
  return <div>Nothing</div>
}
