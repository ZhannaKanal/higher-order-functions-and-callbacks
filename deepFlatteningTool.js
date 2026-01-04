const steamrollArray = (...array) => {
    array.reduce((acc, item) => {
        if (Array.isArray(item)) {
          acc.push(...steamrollArray(item))
      }
  }, []);
};
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
