import React from 'react'
import _ from 'lodash'
import Code from './code'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default function PreContainer(codeBlocks, elementsRendered, updateRendered, language) {
  return (props) => {
    if (props.children[0].props.className === "language-json") {
      return <Highlight {...defaultProps} code={props.children[0].props.children[0]} language="json" >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    }
    const codeIndex = codeBlocks.findIndex((code, index) =>
      compareCodeBlockAndAst(code[props.children[0].props.className], props)
      && !_.includes(elementsRendered, index))
    const codes = codeBlocks[codeIndex]
    updateRendered(codeIndex)
    if (codeIndex > -1) {
      return <React.Fragment>
        {(codes !== undefined) ?
          <Code codes={codes} language={language} /> : ""}
      </React.Fragment>
    }
    return <React.Fragment />
  }
}

const compareCodeBlockAndAst = (codeBlock, ast) => {
  if (codeBlock !== undefined && ast !== undefined)
    return codeBlock.children[0].children[0].value === ast.children[0].props.children[0]
  return <></>
}
