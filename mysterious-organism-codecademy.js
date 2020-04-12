// Meal Maker Project Codecademy
// Date: April 12, 2020
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
    newStrand.push(returnRandBase());
  }
  return newStrand;
  console.log(newStrand);
};

// Factory Function
const = pAequorFactory(num, array) => {
  const object = {
    specimenNum: num,
    dna: array,
    mutuate(){

      return // the mutated strand


    }
  };
  return object;
}


// to Call function when needed
// const tinCan = pAequorFactory(x, y);
//
// tinCan();


// returnRandBase();
// Can you call a function that is defined as a varibale?
