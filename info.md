## Installed Packeg

npm i netlify-cli --save-dev `install dev dependies `

### How to access in URl

domain/.netlify/functions/hello

### How to set up Serverless

- create file `netlify.toml`
- inside file
  [build]
  functions = './functions'

### Function

- allways return string using JSON.stringify()
