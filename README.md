<p align="center">
  <a href="https://greenboard.surge.sh">
    <img alt="Gatsby" src="./logo/logo.png" width="150" />
  </a>
</p>
<h1 align="center">
  Greenboard
</h1>

<p align="center">
  <a href="https://www.producthunt.com/posts/greenboard?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-     greenboard" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=171674&theme=dark&period=daily" alt="Greenboard - Generate beautiful static api documentation  | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
</p>

Create beautiful api documentation with gatsby and greenboard

## Features
- Generate static site from markdown
- Get all features of gatsby and react
- Fully customizable
- Dark Mode
- Uses same structure of slate docs.

## Installation

Setup your folder and install gatsby, react and react-dom
```shell
mkdir my-docs
cd my-docs
yarn init

yarn add gatsby react react-dom
```

Install greenboard
```shell
yarn add gatsby-greenboard
```


Then add gatsby-greenboard to your `gatsby-config.js`. 

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-greenboard",
      options: {},
    },
  ],
}
```
Now create your api documentation in `data/index.html.md`. You can check a sample format in [here](./example/data/index.html.md)


That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Build the production files

```shell
yarn gatsby build
```


## Customization
To get more customization fork this repo.

Clone the repo
```shell
https://github.com/shamin/greenboard.git
```

Travese to the folder
```shell
cd greenboard
```

Install dependencies
```shell
yarn
```

To run example locally
```shell
yarn workspace example develop
```

To build example 
```shell
yarn workspace example build
```

To run the build files locally with serve
```shell
npm install -g serve

cd example/build
serve
```

To deploy example to github pages
```shell
yarn workspace example deploy
```

## FAQs
### How can I deploy the docs to a non root path
Add the `pathPrefix` to `gatsby-config.js` in your docs folder
```javascript
module.exports = {
  pathPrefix: `/docs`,
}
```
Run build command
```
yarn workspace example build
```
For more information visit https://www.gatsbyjs.org/docs/path-prefix/

## Help
If you need some help you can contact me on my email [shamin616@gmail.com](mailto:shamin616@gmail.com)
