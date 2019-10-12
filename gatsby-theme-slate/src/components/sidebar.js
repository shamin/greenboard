import React, { Component } from 'react';
import AsideMenu from './asidemenu'
import SearchBar from './searchbar';

export default class SideBar extends Component {
  render() {
    const { ast } = this.props
    return (
      <div className="sidebar">
        <img className="logo" src="https://image.flaticon.com/icons/svg/167/167756.svg" />
        <SearchBar ast={ast}/>
        <AsideMenu ast={ast} />
      </div>
    )
  }
}
