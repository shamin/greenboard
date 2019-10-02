import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer'

export default class Code extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Highlight {...defaultProps} code={this.props.codes["language-javascript"].children[0].children[0].value} language="javascript" >
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
      </div>
    )
  }
}
