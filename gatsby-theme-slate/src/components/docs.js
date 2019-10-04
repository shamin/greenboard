import React, { Component } from 'react'
import _ from "lodash"
import Contents from './contents'

export default class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      selected: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const langs = this.props.docs[0].frontmatter.language_tabs
    this.setState({
      options: langs,
      selected: langs[0]
    })
  }

  handleChange(event) {
    this.setState({ selected: event.target.value });
  }

  render() {
    const { docs } = this.props
    const { options, selected } = this.state
    return (
      <div className="page-wrapper">
        {/* <div style={{
          marginTop: 20,
          marginLeft: 100
        }}>
          <select value={selected} onChange={this.handleChange}>
            {options.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
        </div> */}
        <div className="dark-box"></div>
        <Contents docs={docs[0]} language={selected} />
        <div className="dark-box"></div>
      </div>
    )
  }
}
