const getIndexToIns = (array, number) => {
  const sorted = array.sort((a, b) => a - b);
  const index = sorted.findIndex((result) => result >= number);
}