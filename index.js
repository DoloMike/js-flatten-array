/**
 * @description flatten an array of arbitrary nesting levels by using recursion.
 * @param {Array} arr the array to be flattened, containing 0 to n nesting levels.
 * @return {Array} flattened array. Every element is a non-array value.
 */
const flattenNestedArray = (arr) => {
    return arr.reduce(
        (flat, toFlatten) =>
            flat.concat(Array.isArray(toFlatten) ? flattenNestedArray(toFlatten) : toFlatten), []
    )
}

module.exports.flattenNestedArray = flattenNestedArray
