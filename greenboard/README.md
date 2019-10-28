# Greenboard

Create beautiful api documentation with gatsby and greenboard

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


Then add `gatsby-greenboard` to your `gatsby-config.js`. 

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

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Build the production files

```shell
yarn gatsby build
```
