const steamrollArray = (...array) => {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...steamrollArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
};
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
