import React, { Component } from 'react'
import Contents from './contents'
import AsideMenu from './asidemenu'
import LangSelector from './langselector'
import { remarkHeaders } from '../utils/htmlAst'

export default class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      selected: ""
    }
  }

  componentWillMount() {
    const langs = this.props.docs.frontmatter.language_tabs
    this.setState({
      options: langs,
      selected: langs[0]
    })

    this.setLang = this.setLang.bind(this)
  }

  setLang(lang) {
    this.setState({ selected: lang });
  }

  render() {
    const { docs } = this.props
    const { options, selected } = this.state
    const ast = remarkHeaders(docs.htmlAst)
    return (
      <React.Fragment>
        <div className="toc-wrapper">
          <AsideMenu ast={ast}/>
        </div>
        <div className="page-wrapper">
          <LangSelector
            options={options}
            selected={selected}
            setLang={this.setLang} />
          <Contents
            htmlAst={ast}
            language={selected} />
          <div className="dark-box"></div>
        </div>
      </React.Fragment>
    )
  }
}
