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
