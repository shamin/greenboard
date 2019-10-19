import React, { Component } from 'react'
import Contents from './contents'
import LangSelector from './langselector'
import { remarkHeaders } from '../utils/htmlAst'
import SideBar from './sidebar'
import DarkModeSwitch from './darkmodeswitch'

export default class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      selected: ""
    }
    this.updateMode = this.updateMode.bind(this)
  }

  componentWillMount() {
    const langs = this.props.docs.frontmatter.language_tabs
    this.setState({
      options: langs,
      selected: langs[0],
      darkMode: false
    })

    this.setLang = this.setLang.bind(this)
  }

  setLang(lang) {
    this.setState({ selected: lang });
  }

  updateMode() {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    const { docs } = this.props
    const { options, selected, darkMode } = this.state
    const ast = remarkHeaders(docs.htmlAst)
    const logoUrl = docs.frontmatter.attachments[0].publicURL
    const { footer, search } = docs.frontmatter

    return (
      <React.Fragment>
        <SideBar darkMode={darkMode} ast={ast} logoUrl={logoUrl} footer={footer} search={search} />
        <div className={`container ${darkMode ? "dark" : ""}`}>
          <LangSelector
            options={options}
            selected={selected}
            setLang={this.setLang} />
          <Contents
            htmlAst={ast}
            language={selected} />
          <div className="code-bg"></div>
        </div>
        <DarkModeSwitch darkMode={darkMode} updateMode={this.updateMode} />
      </React.Fragment>
    )
  }
}
