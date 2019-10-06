import React, { Component } from 'react';
import AsideMenu from './asidemenu'

export default class SideBar extends Component {
  render() {
    const { ast } = this.props
    return (
      <div className="toc-wrapper">
        <AsideMenu ast={ast} />
      </div>
    )
  }
}
