// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (word.length==0){
    return word;
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export function generateInitials(firstName, lastName) {  
  if (firstName === undefined) throw new Error("firstName is required"); 
  if (lastName === undefined) throw new Error("lastName is required");
  let retString = "";
  if(firstName.length > 0){
    retString += firstName.charAt(0);
  }
  if (firstName.length> 0 && lastName.length >0){
    retString +='.'
  }

  if(lastName.length > 0){
    retString += lastName.charAt(0);
  }
  return retString;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (originalPrice < 0 ) throw new Error("Original price cannot be negative");
  if (vatRate < 0 ) throw new Error("vat rate cannot be negative");
  let result = Math.round(originalPrice * (100+vatRate))/100;
  if(result%1 ==0){
    result = parseInt(result);
  }
  return result;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
