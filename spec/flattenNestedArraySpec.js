const flattenNestedArray = require('../index.js').flattenNestedArray

var allTests = [
  {
    i: [1, [2, 3], 4],
    o: [1, 2, 3, 4]
  },
  {
    i: [1, 2, [3, 4, [5, 6, [7, 8]], 9, [10, 11], [12], 13, [14, 15, [16]], 17], [18, 19], 20],
    o: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    i: [[1], [2]],
    o: [1, 2]
  }
]

it('should flatten nested arrays of arbitrary nesting levels', function () {
  allTests.map(test => {
    const res = flattenNestedArray(test.i)
    expect(res).toEqual(test.o)
  })
})
