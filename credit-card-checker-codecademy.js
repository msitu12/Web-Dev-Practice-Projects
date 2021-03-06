/*
Author: Forest Redlin
Date: April 7, 202
Scope: Codecademy CC Checker Challenge
*/


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


// Function #1
function validateCred(arr){
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i-=2){ // loop over array input, starting at last index
    sum += arr[i];
  }

  for (let j = arr.length - 2; j >=0; j-=2){ // loop array by two from 2nd to last index
    if (arr[j]*2 > 9){
      sum += arr[j] - 9;
    } else {
      sum += arr[j];
    }
  }

  if (sum % 10 == 0){
    return true;
  } else {
    return false;
  }
}

/*
insert test code here
*/


//Funtion #2
let invalidCards = [];

function findInvalidCards(arr){
  for (let i = 0; i < arr.length; i++){
    if (validateCred(arr[i]) === false){
      invalidCards.push(arr[i]);
    }
  }
}

findInvalidCards(batch);

/* Tests
console.log(invalidCards);
*/


//Function #3
let invalidCardCompanies = []

function inValidCardCompanies(arr){
  for (let i = 0; i < arr.length; i++){
    switch(arr[i][0]){
      case 3:
        if (invalidCardCompanies.indexOf('Amex') === -1){
          invalidCardCompanies.push('Amex');
        }
        break;
      case 4:
        if (invalidCardCompanies.indexOf('Visa') === -1){
          invalidCardCompanies.push('Visa');
        }
        break;
      case 5:
        if (invalidCardCompanies.indexOf('Mastercard') === -1){
          invalidCardCompanies.push('Mastercard');
        }
        break;
      case 6:
        if (invalidCardCompanies.indexOf('Discover') === -1){
          invalidCardCompanies.push('Discover');
        }
        break;
      default:
        console.log('Company not found');
        break;

      }
    }
}


inValidCardCompanies(invalidCards);
console.log(invalidCardCompanies);









//Notes
/*
This is code from when I misunderstood the question
But, I still don't understand a part of this code

Why does it push 'company not found' to the array if the switch cases are never true?'


case 0: // these cases should never run
case 1:
case 2:
case 7:
case 8:
case 9:
  if (invalidCardCompanies.indexOf('Company not found') === -1){
    invalidCardCompanies.push('Company not found');
  } else {  // this else statement is what was messing up my code
    break;
  }
  */
