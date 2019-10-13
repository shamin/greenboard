import React, { Component } from 'react';
import { getSearchableData } from '../utils/htmlAst'
import { indexSearchData } from '../utils/search'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searchResults: [],
      searchFocussed: false
    }

    this.searchItem = this.searchItem.bind(this)
    this.searchBarFocussed = this.searchBarFocussed.bind(this)
    this.searchBarBlurred = this.searchBarBlurred.bind(this)
  }

  componentDidMount() {
    const searchData = getSearchableData(this.props.ast)
    this.search = indexSearchData(searchData)
  }

  searchItem(e) {
    const query = e.target.value
    this.setState({ searchResults: this.search.search(query), query })
  }

  searchBarFocussed(e) {
    this.setState({
      searchFocussed: true
    })
  }

  searchBarBlurred(e) {
    setTimeout(() => {
      this.setState({
        searchFocussed: false
      })
    }, 200);
  }

  renderResults(searchResults) {
    if (searchResults.length <= 0) {
      return <p className="search-results__empty-state">No results found</p>
    }
    return searchResults.filter((result) => result.data.text).map((result) => (
      <a key={result.searchHeader.id + result.data.text} href={`#${result.searchHeader.id}`} className="search-results__item">
        <h4>{result.searchHeader.heading}</h4>
        <p>{result.data.text}</p>
      </a>
    ))
  }

  render() {
    const { searchResults, searchFocussed, query } = this.state
    return (
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search" onChange={this.searchItem} onBlur={this.searchBarBlurred} onFocus={this.searchBarFocussed} />
        {(searchFocussed && query.length > 0) &&
          <div className="search-results">
            {this.renderResults(searchResults)}
          </div>
        }
      </div>
    )
  }
}
