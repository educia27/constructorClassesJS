// Define your Book class here:
class Book {
  constructor (title, author, date, id,numberOfPages, timesCheckedOut, discarded) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.id = id;
    this.numberOfPages = numberOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
}

class Manual extends Book {
    tossOut() {
      let age = 2021 - this.date
      if (age > 5) {
        this.discarded = "Yes"
      }
    }
}

class Novel extends Book {
    throwOut() {
      if (this.timesCheckedOut > 100) {
        this.discarded = "Yes"
      }
    }
}


let book1 = new Novel("Pride and Prejudice","Jane Austen", 1813 , 1111111111111, 432, 32, "No");

let book2 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000', 1147, 1, "No")

console.log(book1);
console.log(book2);

