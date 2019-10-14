import React, { Component } from 'react';
import AsideMenu from './asidemenu'
import SearchBar from './searchbar';
import MobileSelectMenu from './mobileselectmenu';

export default class SideBar extends Component {
  render() {
    const { ast, logoUrl } = this.props
    return (
      <div className="sidebar">
        <img className="logo" src={logoUrl} />
        <SearchBar ast={ast}/>
        <AsideMenu ast={ast} />
        <MobileSelectMenu ast={ast}/>
      </div>
    )
  }
}
