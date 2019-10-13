import React, { Component } from 'react';

export default class AsideMenuItem extends Component {
  isChild(parent, slug) {
    return (parent.children.findIndex((e) => e.id === slug) >= 0)
  }

  render() {
    const { link, active } = this.props
    const sublinks = link.children
    const isSublinkActive = this.isChild(link, active)
    return (
      <li className={`aside-menu__list-item ${active === link.id ? "aside-menu__list-item-active" : (isSublinkActive ? "aside-menu__list-item-active-parent" : "")}`}>
        <a
          href={`#${link.id}`}
          className="link"
        >{link.textNode}</a>
        <ul
          className={`${isSublinkActive ? " sublist-menu sublist-menu-active" : ""}`}
          style={{ display: isSublinkActive ? "block" : "none" }}
        >
          {sublinks.map((sublink) => (
            <li key={sublink.id} className={`sublist-menu__list-item ${active === sublink.id ? "sublist-menu__list-item-active" : ""}`}>
              <a
                href={`#${sublink.id}`}
                className="link"
              >{sublink.textNode}</a>
            </li>
          ))}
        </ul>
      </li>
    )
  }
}
