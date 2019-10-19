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
yarn add greenboard
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

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Build the production files

```shell
yarn gatsby build
```


## Customization
To get more customization fork this repo and run your docs.

To run example locally
```shell
yarn workspace example develop
```
