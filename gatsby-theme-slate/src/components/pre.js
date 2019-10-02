import React from 'react'
import Code from './code'

export default function PreContainer(codeBlocks) {
  return (props) => {
    const codes = codeBlocks.filter((code) => compareCodeBlockAndAst(code[props.children[0].props.className], props))
    return <div>
      {(codes !== undefined) ?
        <Code codes={codes[0]} /> : "Nothing"}
    </div>
  }
}

const getCodeText = (pre) => {
  return pre.children[0].props.children[0]
}

const compareCodeBlockAndAst = (codeBlock, ast) => {
  if (codeBlock !== undefined && ast !== undefined)
    return codeBlock.children[0].children[0].value === ast.children[0].props.children[0]
  return <div>Nothing</div>
}
