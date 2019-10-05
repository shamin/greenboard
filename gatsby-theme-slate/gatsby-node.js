const fs = require('fs')

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data/index.html.md'

  if(!fs.existsSync(contentPath)) {
    reporter.panic(`File not found - Make sure you have data/index.html.md file`)
  }
}

// Creating a page with  docs/index.md file
exports.createPages = async ({actions, graphql, reporter}) => {
  const basePath = '/'
  const docTemplate = require.resolve(`./src/templates/docs.js`)
  
  actions.createPage({
    path: basePath,
    component: docTemplate,
  })

  // const result = await graphql(`
  // `)

  // Handling errors
  // if (result.errors) {
  //   reporter.panic(`Error loading docs markdown`, result.errors)
  //   return
  // }
}
