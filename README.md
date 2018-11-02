# js-flatten-array
function that flattens nested arrays of arbitrary nesting levels

## Installation
`git clone https://github.com/DoloMike/js-flatten-array.git`  
`cd js-flatten-array`  
`yarn` or `npm i`

## Testing
`yarn test`

## Usage
require the index.js file with a relative path

`const flattenNestedArray = require('../index.js').flattenNestedArray`  
`const flattened = flattenNestedArray([1, [2, 3]])`
