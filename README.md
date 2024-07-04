# Task 1: Advanced Array Manipulation

## Objective

Implement a set of utility functions using advanced array methods like `reduce`, `map`, `filter`, etc.

## Requirements

- Write a function that flattens a nested array of arbitrary depth.
- Write a function that groups an array of objects by a specified key.
- Write a function that calculates the total value of a specific property in an array of objects.
- Ensure the functions are pure and do not mutate the original arrays.

## Steps Taken

1. **Flattening Nested Arrays**

   - Implemented the `flatArbitraryDepthArray` function to flatten arrays of arbitrary depth using the `flat` method.

2. **Grouping Objects by Key**

   - Developed the `groupObjectsByKey` function to group an array of objects by a specified key using the `reduce` method.

3. **Calculating Total Property Value**

   - Created the `totalValueOfSpecificProp` function to calculate the total value of a specified property in an array of objects using the `reduce` and `map` methods.

4. **Unit Testing**
   - Used Jest for unit testing to ensure the correctness and efficiency of the utility functions.

## Utility Functions Code

```javascript
const flatArbitraryDepthArray = (array, depth) => array.flat(depth);

const groupObjectsByKey = (array) => {
  return array.reduce((total, current) => {
    for (const [key, value] of Object.entries(current)) {
      if (key in total) {
        total[key].push(value);
      } else {
        total[key] = [value];
      }
    }
    return total;
  }, {});
};

const totalValueOfSpecificProp = (array, property) => {
  if (array.length === 0) return 0;
  const isNumeric = typeof array[0][property] === "number";
  if (isNumeric) {
    return array.reduce((acc, current) => acc + current[property], 0);
  } else {
    return array.map((obj) => obj[property]).join(" ");
  }
};

module.exports = {
  flatArbitraryDepthArray,
  groupObjectsByKey,
  totalValueOfSpecificProp,
};
```
