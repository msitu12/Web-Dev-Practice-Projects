// Library Project Codecademy (using classes)
// Date: April 16, 2020
// Time to complete: ~2-3 hours
// Author: fredlin


class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false; //  (boolean, initially false);
    this._ratings = []; //(array, initially empty)
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkedOutStatus) {
    this._isCheckedout = checkedOutStatus;
  }

  getAverageRating() {
    let totalRating = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // review this syntax -- why the ,0 for reduce

    let averageRating = totalRating / this.ratings.length;
    return averageRating;

  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  addRating(newRating) {
    this.ratings.push(newRating);

  }

}

//Book Child
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//CD Child
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

}

// Movie Child
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._directory;
  }

  get runTime() {
    return this._runTime;
  }
}


// Code Tests

// Book Instance Tests
const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(`This should be "true": ${historyOfEverything.isCheckedOut}`);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(`The average rating for the book "A Short History of Nearly Everything" is: ${historyOfEverything.getAverageRating()}`);

//Movie Instance Tests
const speed = new Movie('Speed','Jan de Bont',116);

speed.toggleCheckOutStatus();
console.log(`This should be "true": ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(`The average rating for the movie "speed" is: ${speed.getAverageRating()}`);


// Additional Tasks
// Add more properties to each class (movieCast, songTitles, etc.)
//
// Create a CD class that extends Media.
//
// In .addRating(), make sure input is between 1 and 5.
//
// Create a method called shuffle for the CD class. T
// he method returns a randomly sorted array of all the songs in the songs property.
//
// Create class called Catalog that holds all of the Media items in our library.
