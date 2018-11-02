# js-flatten-array
function that flattens an array of arbitrarily nested arrays

## Installation
`git clone https://github.com/DoloMike/js-flatten-array.git`  
`cd js-flatten-array`  
`yarn` or `npm i`

```bash
git clone https://github.com/DoloMike/js-flatten-array.git
cd js-flatten-array
```
`yarn` or `npm i`


## Testing
`yarn test` or `npm run test`

## Usage
require the index.js file with a relative path

```javascript
const flattenNestedArray = require('../index.js').flattenNestedArray
flattenNestedArray([1, [2, 3]])
[1, 2, 3]
```
