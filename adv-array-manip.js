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
  if (property === "year" || property === "age") {
    return array.reduce((acc, current) => acc + current[property], 0);
  } else if (
    property === "name" ||
    property === "school" ||
    property === "department"
  ) {
    return array.map((obj) => obj[property]).join(" ");
  }
};

module.exports = {
  flatArbitraryDepthArray,
  groupObjectsByKey,
  totalValueOfSpecificProp,
};
