const whatIsInAName = (array, sourceObject) => {
    const keys = Object.keys(sourceObject);
    return array.filter(x=>keys.every(y=>x[y]===sourceObject[y]))
};
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
