<p align="center">
  <a href="https://greenboard.surge.sh">
    <img alt="Gatsby" src="./logo/logo.png" width="150" />
  </a>
</p>
<h1 align="center">
  Greenboard
</h1>

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


Then add greenboard to your `gatsby-config.js`. 

```javascript
module.exports = {
  plugins: [
    {
      resolve: "greenboard",
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
