class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = [
  new Book("JavaScript Guide", "John"),

  new Book("React Basics", "David"),
];

console.table(books);
