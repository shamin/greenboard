import React, { Component } from 'react';
import AsideMenu from './asidemenu'

export default class SideBar extends Component {
  render() {
    const { ast } = this.props
    return (
      <div className="sidebar">
        <img className="logo" src="https://image.flaticon.com/icons/svg/167/167756.svg" />
        <AsideMenu ast={ast} />
      </div>
    )
  }
}
