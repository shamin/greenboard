import React, { Component } from 'react';
import _ from 'lodash'

export default class AsideMenu extends Component {
  constructor(props) {
    super(props)
  }

  getLinks(docs) {
    const headers = docs.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h1', 'h2'], el.tagName));

    const beautified = headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[0] ? header.children[0].value : '';
      link.id = header.properties.id;
      return link;
    });

    let h2s, h1text
    const merged = []
    beautified.forEach((heading, index) => {
      if (heading.tagName === "h1") {
        if (h2s !== undefined) {
          merged.push({
            textNode: h1text,
            tagName: "h1",
            children: h2s
          })
        }
        h2s = []
        h1text = heading.textNode
      } else if (heading.tagName === "h2") {
        h2s.push(heading)
      }
    })
    if (h2s !== undefined) {
      merged.push({
        textNode: h1text,
        tagName: "h1",
        children: h2s
      })
    }
    return merged
  }



  render() {
    const { docs } = this.props
    // parseHeadings(docs)
    const links = this.getLinks(docs)
    return (
      <React.Fragment>
        <ul className="toc-list-h1">
          {links.map((linkh1) =>
            <li>
              <a key={linkh1.textNode} className="toc-h1 toc-link">{linkh1.textNode}</a>
              <ul class="toc-list-h2 active" style={{display: "block"}}>
                {linkh1.children.map((linkh2) => <a key={linkh2.textNode} className="toc-h2 toc-link">{linkh2.textNode}</a>)}
              </ul>
            </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}
