import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default function PreContainer(codeBlocks) {
  return (props) => {
    // console.log(props)
    // temp1.children[0].props.className
    console.log(codeBlocks.filter((code)=>compareCodeBlockAndAst(code[props.children[0].props.className], props)))
    return <div>Code Block</div>
  }
}

const getCodeText = (pre) => {
  return pre.children[0].props.children[0]
}

const compareCodeBlockAndAst = (codeBlock, ast) => {
  if(codeBlock !== undefined && ast !== undefined)
    return codeBlock.children[0].children[0].value === ast.children[0].props.children[0]
  return <div>Nothing</div>
}
