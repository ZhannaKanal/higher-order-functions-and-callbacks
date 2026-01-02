const destroyer = (array, ...args) => {
  const filteredArray1 = array.filter((x) => !args.includes(x));
  const filteredArray2 = args.filter((x) => !array.includes(x));
  const result = filteredArray1.concat(filteredArray2);
  return result;
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
