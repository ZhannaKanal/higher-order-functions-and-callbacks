const diffArray = (array1, array2) => {
  const difference = array1
    .filter((x) => !array2.includes(x))
    .concat(array2.filter((x) => !array1.includes(x)));
  return difference;
};
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
