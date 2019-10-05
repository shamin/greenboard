import React, { Component } from 'react';

export default class LangSelector extends Component {
  render() {
    const { options, selected, setLang } = this.props
    return (
      <div className="dark-box">
        <div className="lang-selector">
          {options.map((e) => (
            <a
              key={e}
              onClick={() => setLang(e)}
              className={selected === e ? "active" : ""}
            >{e}</a>))}
        </div>
      </div>
    )
  }
}
