import React, { Component } from 'react';
import { getLinks } from '../utils/htmlAst'
import AsideMenuItem from './asidemenuitem';

export default class AsideMenu extends Component {
  constructor(props) {
    super(props)

    this.scrollSpy = this.scrollSpy.bind(this);

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
    const scrollSpyOffset = 100;
    const selector = 'h1, h2';
    const headers = Array.from(document.querySelectorAll(selector));

    const headersOffset = headers.map((el, i) => {
      const slug = el.id;
      let nextEl;

      if ((headers.length - 1) !== i) {
        nextEl = headers[i + 1].getBoundingClientRect().top;
      } else {
        nextEl = window.innerHeight;
      }
      const offset = (nextEl + document.body.scrollTop) - generateOffset(scrollSpyOffset);

      return { slug, offset };
    });

    const headersScrollTop = headersOffset.filter(el => el.offset > 0);

    if (window.history.pushState) {
      window.history.pushState(null, null, `#${headersScrollTop[0].slug}`);
    }
    else {
      window.location.hash = `#${headersScrollTop[0].slug}`;
    }

    this.setState({ activeNavItem: headersScrollTop[0] });
  }

  render() {
    const { ast } = this.props
    const { activeNavItem } = this.state
    const links = getLinks(ast)
    return (
      <ul className="aside-menu">
        {links.map((link) =>
          <AsideMenuItem
            key={link.id}
            link={link}
            active={activeNavItem.slug}
          />
        )}
      </ul>
    )
  }
}

const easeInCubic = (t) => t * t * t

const generateOffset = (defaultOffset) => {
  const breakPoint = document.documentElement.offsetHeight - (window.innerHeight * 2)
  const currentScroll = breakPoint - document.documentElement.scrollTop

  if (currentScroll > 0) {
    return defaultOffset
  }

  let additionalOffest = easeInCubic(currentScroll * -1 / 100)

  return (defaultOffset + additionalOffest < window.innerHeight) ? defaultOffset + additionalOffest : additionalOffest
}
