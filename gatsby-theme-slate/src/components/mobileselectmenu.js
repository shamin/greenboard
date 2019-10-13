import React, { Component } from 'react';
import { getLinks } from '../utils/htmlAst'

export default class MobileSelectMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: ""
    }

    this.linkSelected = this.linkSelected.bind(this)
  }

  componentWillMount() {
    this.links = getLinks(this.props.ast)

    this.setState({
      selectedItem: this.links[0].id
    })
  }

  linkSelected(e) {
    const value = e.target.value
    this.setState({
      selectedItem: value
    })
    window.location.hash = value
  }

  render() {
    return (
      <div className="mobile-select-menu-cont">
        <select className="mobile-select-menu" onChange={this.linkSelected}>
          {this.links.map((link) => (
            <React.Fragment key={link.id}>
              <option value={link.id}>{link.textNode}</option>
              {link.children.map((sublink) => <option key={sublink.id} value={sublink.id}>{sublink.textNode}</option>)}
            </React.Fragment>
          ))}
        </select>
      </div>
    )
  }
}
