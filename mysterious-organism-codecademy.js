// Meal Maker Project Codecademy
// Date: April 14, 2020
// Author: fredlin

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
  console.log(dnaBases);
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  };

  return newStrand;
  console.log(newStrand);
};

// I think I will use this when calling my factory function
// Will need to picture out how to number each new strand
//



// Factory Function
const pAequorFactory = (num, array) => {
  const dnaObject = {
    specimenNum: num, // a unique identifer for the strand of dna
    dna: array, // a strand of dna of lengths 15
    mutuate() {
      // there must be a better way.....
      const randomIndex = Math.floor(Math.random() * 15);
      const dnaBase = this.dna[randomIndex];
      if (dnaBase === 'A') { // could use switch here
        let newDnaBase = ['T', 'C', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);

        // randomly select an index in the dna array

        this.dna[newRandomIndex] = newDnaBase;

        // change that base to a random base of the 3 remmain types

      } else if (dnaBase === 'T') {
        let newDnaBase = ['A', 'C', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[newRandomIndex] = newDnaBase;
      } else if (dnaBase === 'C') {
        let newDnaBase = ['A', 'T', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[newRandomIndex] = newDnaBase;
      } else if (dnaBase === 'G') { // should this still be else if?
        let newDnaBase = ['A', 'T', 'C'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[newRandomIndex] = newDnaBase;
      }

      return this.dna; // right position?
    },

    compareDNA(objectToCompare) { // this object contains a specimenNum and a dna array
      const indexMatchCounter = 0;
      for (let i = 0; i < 15; i++) { // loop over input object
        if (objectToCompare.dna[i] === this.dna[i]) { // I am not confident that these pathways are accurate.
          indexMatchCounter++;
        };
      };

      const percentCommon = indexMatchCounter / 15;
      console.log(`Specimen ${objectToCompare.specimenNum} and specimen
      ${this.dnaObject.specimenNum} have ${indexMatchCounter} DNA in common.`);

      // I still do not understand why this is the correct syntax for logging js within objects/methods
    },

    willLikelySurvive() {
      let cgCounter = 0;

      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'G' || 'C') {
          cgCounter++;
        };
      };

      const percentCG = cgCounter / 15;

      if (percentCG >= 0.60) {
        return true;
      } else {
        return false;
      };
    }
  };
  return dnaObject;
};


let arrayOf30 = [];

while (arrayOf30.length < 30) {
  let specimenNum = 1;
  let tinCan = pAequorFactory(specimenNum, returnRandBase);
  if (tinCan.willLikelySurvive() === true) {
    arrayOf30.push(tinCan);
    specimenNum++;
  };
};

console.log(arrayOf30);





// create 30 instances using factory function that can survice
// store in an array (what about indenifier?)
// create a while loop to keep running factory function till the array has lenght = 30
// create an if statement to push new array to list IF stay passes survival test
// where does mutation come into this?

// to Call function when needed
// const tinCan = pAequorFactory(x, y);
//
// tinCan();

// returnRandBase();
// Can you call a function that is defined as a varibale?
