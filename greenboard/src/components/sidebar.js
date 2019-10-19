import React, { Component } from 'react';
import AsideMenu from './asidemenu'
import SearchBar from './searchbar';
import MobileSelectMenu from './mobileselectmenu';
import FooterLinks from './footerlinks';

export default class SideBar extends Component {
  render() {
    const { ast, logoUrl, footer, search, darkMode } = this.props
    return (
      <div className={`sidebar ${darkMode ? "dark" : ""}`}>
        <img className="logo" src={logoUrl} />
        {search && <SearchBar ast={ast}/>}
        <AsideMenu ast={ast} />
        <FooterLinks footer={footer}/>
        <MobileSelectMenu ast={ast}/>
      </div>
    )
  }
}
