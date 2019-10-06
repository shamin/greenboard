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
      <li>
        <a
          href={`#${link.id}`}
          className={`toc-h1 toc-link ${active === link.id ? "active" : (isSublinkActive ? "active-parent" : "")}`}
        >{link.textNode}</a>
        <ul
          className={`toc-list-h2 active ${isSublinkActive ? "active" : ""}`}
          style={{ display: isSublinkActive ? "block" : "none" }}
        >
          {sublinks.map((sublink) => (
            <a
              key={sublink.id}
              href={`#${sublink.id}`}
              className={`toc-h2 toc-link ${active === sublink.id ? "active" : ""}`}
            >{sublink.textNode}</a>
          ))}
        </ul>
      </li>
    )
  }
}
