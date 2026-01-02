const destroyer = (array, ...args) => {
  const filteredArray1 = array.filter((x) => !args.includes(x));
  const filteredArray2= args.filter((x) => !array.includes(x));
  return filteredArray2;
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
