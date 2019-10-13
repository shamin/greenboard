import React from 'react'
import _ from 'lodash'
import Code from './code'

export default function PreContainer(codeBlocks, elementsRendered, updateRendered, selectedLanguage) {
  return (props) => {
    const codeLanguage = props.children[0].props.className;

    if (codeLanguage === "language-json") {
      return (
        <Code
          code={getCodeFromAst(props)}
          language="json"
        />)
    }

    const codeIndex = getCodeBlockIndex(codeBlocks, props, codeLanguage, elementsRendered)
    const codes = codeBlocks[codeIndex]

    updateRendered(codeIndex)

    if (codeIndex > -1 && codes !== undefined) {
      return (
        <Code
          code={getCodeFromCodeblock(codes[`language-${selectedLanguage}`])}
          language={selectedLanguage}
        />)
    }
    return <React.Fragment />
  }
}

const getCodeFromCodeblock = (codeBlock) => {
  return codeBlock.children[0].children[0].value || false
}

const getCodeFromAst = (ast) => {
  return ast.children[0].props.children[0] || false
}

const getCodeBlockIndex = (codeBlocks, ast, codeLanguage, elementsRendered) => {
  return codeBlocks.findIndex((codes, index) =>
    getCodeFromCodeblock(codes[codeLanguage]) === getCodeFromAst(ast)
    && !_.includes(elementsRendered, index))
}

