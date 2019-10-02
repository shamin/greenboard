const fs = require('fs')
const path = require('path')

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data'

  if(!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// Creating a page with  docs/index.md file
exports.createPages = async ({actions, graphql, reporter}) => {
  const basePath = '/'
  const docTemplate = path.resolve(`src/templates/docs.js`)
  
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
