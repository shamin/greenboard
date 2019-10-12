import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer'

export default class Code extends Component {
  render() {
    const { code, language } = this.props

    return (
      <Highlight {...defaultProps} code={code} language={language} theme={undefined}>
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
    )
  }
}
