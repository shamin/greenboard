import React, { Component } from 'react';

export default class FooterLinks extends Component {
  render() {
    return (
      <div className="footer-links">
        {this.props.footer.map((link)=>(
          <div className="footer-links__link" key={link} dangerouslySetInnerHTML={{__html: link}}/>
        ))}
      </div>
    )
  }
}
