//Mini Linter Challenge - Codecademy
// Date completed: April 11, 2020
// Author: fredlin

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Task #1 - Split string into array of words
const storyWords = story.split(' ');
// .replace(".", "").replace(",", "").replace("?", "").replace("!","")
// Note the split operator keeps punctuation on the word. This is because it is splitting based on the given " " empty space
// This would present it's own issues. When I want to put the string back toegther, it will not have punctuation.

// console.log(storyWords);

// Task #2 - How many words in the story?

// console.log(storyWords.length);


// Task #3 Filter out unecessary words

const betterWords = storyWords.filter(word => {
  switch (word){
  case 'extremely':
  case 'literally':
  case 'actually':
    return false;
    break;
  default:
    return true;
}}
)
// really happy with this formula

// console.log(betterWords.length);

// Task #4 - Count Overused Words

// Updates attempt at task4

let reallyCount = 0;
let basicallyCount = 0;
let veryCount = 0;

storyWords.forEach(word => {
  if (word === 'really'){
    reallyCount++;
  } else if (word === 'basically'){
    basicallyCount++;
  } else if  (word === 'very'){
    veryCount++;
  }
})

// console.log('Really count: ' + reallyCount);
// console.log('Basically count: ' + basicallyCount);
// console.log('Very count: ' + veryCount);


// First attempt at task 4
let countOverusedWords = 0;

storyWords.forEach(wordOuter => {
  overusedWords.forEach(wordInner => {
    if (wordOuter == wordInner) {
      countOverusedWords++;
    }
  })
})

// console.log(countOverusedWords);

// Task #5 - Count Sentences in Paragraph

let sentenceCounter = 0;

storyWords.forEach(word => {
  switch (word[word.length - 1]){
    case ".":
    case "!":
    // case "?": (not asked for, but should be here)
      sentenceCounter++;
      break;
    default:
      break;
  }
})

// console.log(sentenceCounter)

// Task #6 - Log Output to Console
// Challenge:

 const logOutput = () => {
   console.log('This is the total word count of the original paragraph: '+ storyWords.length + '.');
   console.log('This is the  word count after removing unecessary words: '+ betterWords.length + '.');
   console.log('This is the  number of times each overused word appears: '+ 'Really: ' + reallyCount + ", " + 'Very: ' + veryCount + ", " + 'Basically: ' + basicallyCount + ".");
  //  I may have done this wrong. Would have to change this to get a count for each individually
  console.log('This is the sentence count for the paragraph: '+ sentenceCounter + ".")
 }

logOutput()

// Task #7 - Log betterWords as complete string

// console.log(betterWords.join(" "));


// More ideas to play with

// For the overused words, remove it every other time it appears.
//
// Write a function that finds the word that appears the greatest number of times.
//
// Replaced overused words with something else.
