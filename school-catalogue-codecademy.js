// School Catalogue
// Date: April 17, 2020
// Time to complete: 1hr
// Author: fredlin

class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(data) {
    if (typeof data === 'number'){
      this._numberOfStudents = data;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);

  }

  static pickSubstituteTeacher(substituteTeachers) { //check syntax
    let index = Math.floor(Math.random() * substituteTeachers.length - 1);
    return substituteTeachers[index];
    console.log(`Your subsitue teacher for today will be: ${substituteTeachers[index]}`);
    // can I do this for static?
  }

}

class Primary extends School {
  constructor(name, numerOfStudents, pickupPolicy) {
    super(name, 'primary', numerOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name) {
    super(name, 'middle', numberOfStudents);

  }
}

class High extends School {
  constructor(name, numerOfStudents, sportsTeams) {
    super(name, 'high', numerOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

//Tests -- creating instances

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(sub);

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);



// Challenge Problems
// Add more properties to each class (averageTestScores, schoolOverview, etc.)
// Create a class called SchoolCatalog that holds a collection of schools.
// Create an instance of SchoolCatalog for primary, middle, and high schools.






// Parameters
//
// School
// Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
//
// Primary
// Includes everything in the School class, plus one additional property
// Properties: pickupPolicy (string)
//
// Middle
// Does not include any additional properties or methods
//
// High
// Includes everything in the School class, plus one additional property
// Properties: sportsTeams (array of strings)
//
// If you’re looking for a challenge, create the constructor() and getters for the four classes above.
//  Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
