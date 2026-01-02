const destroyer = (array, ...args) => {
  const filteredArray1 = array.filter((x) => !args.includes(x));
  return filteredArray1;
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
