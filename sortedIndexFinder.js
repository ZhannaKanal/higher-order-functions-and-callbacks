const getIndexToIns = (array, number) => {
  const sorted = array.sort((a, b) => a - b);
  const index = sorted.findIndex((result) => result >= number);
  return index === -1 ? sorted.length : index;
};
console.log(getIndexToIns([], 5));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
