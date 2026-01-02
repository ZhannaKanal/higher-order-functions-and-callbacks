const diffArray = (array1, array2) => {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    
  }
  return newArr;
};
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
