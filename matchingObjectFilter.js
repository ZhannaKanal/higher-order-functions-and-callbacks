const whatIsInAName = (array, sourceObject) => {
  const keys = Object.keys(sourceObject);
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
