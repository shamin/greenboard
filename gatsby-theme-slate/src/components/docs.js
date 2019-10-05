import React, { Component } from 'react'
import Contents from './contents'
import AsideMenu from './asidemenu'
import LangSelector from './langselector'

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
    return (
      <React.Fragment>
        <LangSelector
          options={options}
          selected={selected}
          setLang={this.setLang} />
        {/* <div className="toc-wrapper">
          <AsideMenu docs={docs[0]}/>
        </div>
        <div className="page-wrapper">
          
          <Contents docs={docs[0]} language={selected} />
          <div className="dark-box"></div>
        </div> */}
      </React.Fragment>
    )
  }
}
