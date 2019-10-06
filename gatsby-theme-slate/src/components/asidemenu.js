import React, { Component } from 'react';
import { getLinks } from '../utils/htmlAst'
import AsideMenuItem from './asidemenuitem';

export default class AsideMenu extends Component {
  constructor(props) {
    super(props)

    this.scrollSpy = this.scrollSpy.bind(this);
    this.scrollSpyOffset = 300;

    this.state = {
      activeNavItem: false,
    };
  }

  componentDidMount() {
    this.scrollSpy();
    window.addEventListener('scroll', this.scrollSpy);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollSpy);
  }

  scrollSpy() {
    const selector = 'h1, h2';
    const headers = Array.from(document.querySelectorAll(selector));

    const headersOffset = headers.map((el, i) => {
      const slug = el.id;
      let nextEl;

      if ((headers.length - 1) !== i) {
        nextEl = headers[i + 1].getBoundingClientRect().top;
      } else {
        nextEl = headers[i].getBoundingClientRect().top + 9000;
      }
      const offset = (nextEl + document.body.scrollTop) - this.scrollSpyOffset;

      return { slug, offset };
    });

    const headersScrollTop = headersOffset.filter(el => el.offset > 0);

    this.setState({ activeNavItem: headersScrollTop[0] });
  }

  render() {
    const { ast } = this.props
    const { activeNavItem } = this.state
    const links = getLinks(ast)
    return (
      <React.Fragment>
        <ul className="aside-menu">
          {links.map((link) =>
            <AsideMenuItem
              key={link.id}
              link={link}
              active={activeNavItem.slug}
            />
          )}
        </ul>
      </React.Fragment>
    )
  }
}
