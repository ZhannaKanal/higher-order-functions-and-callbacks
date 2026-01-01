const books = [
  {
    title: "First",
    authorName: "Me",
    releaseYear: 2010,
  },
  {
    title: "Second",
    authorName: "You",
    releaseYear: 2010,
  },
  {
    title: "First",
    authorName: "He",
    releaseYear: 2010,
  },
];
const sortByYear = (book1, book2) => {
  const difference = book1.releaseYear - book2.releaseYear;
  if (difference >= 1) {
    return 1;
  } else if (difference < 0) {
    return -1;
  } else {
    return 0;
  }
};
console.log(sortByYear(books[1], books[0]));

books.filter(book => book.releaseYear <= 1950);
