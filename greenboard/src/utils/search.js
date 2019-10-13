import { Search } from 'js-search';

export const indexSearchData = (searchData) => {
  const search = new Search('id')

  search.addIndex(['searchHeader', 'heading'])
  search.addIndex(['data', 'text'])

  search.addDocuments(searchData)

  return search
}
