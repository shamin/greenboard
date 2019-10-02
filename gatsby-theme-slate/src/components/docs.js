import React, { Component } from 'react'
import _ from "lodash"
import Contents from './contents'

export default class Docs extends Component {
  render() {
    const { docs } = this.props

    return (
      <div>
        <div>Sidebar</div>
        <Contents docs={docs[0]}/>
      </div>
    )
  }
}
