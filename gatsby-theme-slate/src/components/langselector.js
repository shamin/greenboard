import React, { Component } from 'react';

export default class LangSelector extends Component {
  render() {
    const { options, selected, setLang } = this.props
    return (
      <div className="code-bg">
        <div className="lang-selector">
          {options.map((e) => (
            // eslint-disable-next-line
            <a
              key={e}
              onClick={() => setLang(e)}
              className={`lang-selector__tabs ${selected === e ? "active" : ""}`}
            >{e}</a>))}
        </div>
      </div>
    )
  }
}
