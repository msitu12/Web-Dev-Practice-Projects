// Mysterious Organinism Project Codecademy
// Date: April 14, 2020
// Author: fredlin


// Returns a random DNA base
// given in project setup
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
  console.log(dnaBases);
};
// currently, I am not using this function at all (although mockUpStrand calls it)
// I suspect there is a way to use this function as a helper to the mutate method


// Returns a random single stand of DNA containing 15 bases
// given in project setup
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  };

  return newStrand;
};



// Factory Function
const pAequorFactory = (specNum, dnaStrand) => {
  return {
    specimenNum: specNum, // a unique identifer for the strand of dna
    dna: dnaStrand, // a strand of dna of length 15
    mutate() {
      // there must be a better way.....
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const dnaBase = this.dna[randomIndex];
      if (dnaBase === 'A') { // could use switch here or adapt to all returnRand Base helper
        let newDnaBaseArray = ['T', 'C', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);   // randomly select an index in the shortened dna array
        this.dna[randomIndex] = newDnaBaseArray[newRandomIndex]; // change base in object strand to a random base of the 3 remaining types

      } else if (dnaBase === 'T') {
        let newDnaBaseArray = ['A', 'C', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[randomIndex] = newDnaBaseArray[newRandomIndex];

      } else if (dnaBase === 'C') {
        let newDnaBaseArray = ['A', 'T', 'G'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[randomIndex] = newDnaBaseArray[newRandomIndex];

      } else if (dnaBase === 'G') {
        let newDnaBaseArray = ['A', 'T', 'C'];
        let newRandomIndex = Math.floor(Math.random() * 3);
        this.dna[randomIndex] = newDnaBaseArray[newRandomIndex];
      }

      return this.dna;
    },

    compareDNA(objectToCompare) { // this object contains a specimenNum and a dna array
      let indexMatchCounter = 0;
      for (let i = 0; i < 15; i++) { // loop over input object
        if (objectToCompare.dna[i] === this.dna[i]) { // I am not confident that these pathways are accurate.
          indexMatchCounter++;
        };
      };

      const percentCommon = Math.floor((indexMatchCounter / 15) * 100);
      console.log(`Specimen ${objectToCompare.specimenNum} and specimen ${this.specimenNum} have ${percentCommon}% DNA bases in common.`);
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
};

// To store 30 sample strands in an array where willLikelySurvive == true
let arrayOf30 = [];
let specimenNum = 1; // initialize a unique specimenNum the will be applied to each object

while (arrayOf30.length < 30) {
  let tinCan = pAequorFactory(specimenNum, mockUpStrand());
  if (tinCan.willLikelySurvive() === true) {
    arrayOf30.push(tinCan);
    specimenNum++;
  };
};

// // Test Commands

// // arrayOf30 test
// console.log(arrayOf30);

// // mutate method
// const strand1 = pAequorFactory(111, mockUpStrand());
// console.log(`strand1 before mutatation: ${strand1.dna}`);
// strand1.mutate();
// console.log(`strand1 after mutatation: ${strand1.dna}`);
//
// // compareDNA method
// const strand2 = pAequorFactory(222, mockUpStrand());
// const strand3 = pAequorFactory(333, mockUpStrand());
//
// // strand2.compareDNA(strand3);
//
// // willLikelySurvive method
// console.log(strand2);
// const strand2SurvivalChances = strand2.willLikelySurvive();
// console.log(`Chance of survival (true = high & false = low): ${strand2SurvivalChances}`);
// // never seen this go false...
