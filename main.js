// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.
function max(a, b){
    // Your answer here
    if (isNaN(a) || isNaN(b)) {
      return "Wait, at least one of these is not a number that can be compared.";
    } else {
      if (a > b) {
        return a;
      } else if (a < b) {
        return b;
      } else {
        return "Same value.";
      }
    }
}
console.log(max(3,10));
console.log(max(73,40));
console.log(max(5,5));
console.log(max("Hi", "There"));
console.log(max("Fourteen",14));
console.log(max(20, "20"));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
function compare(x,y) {
  return x - y;
}
function maxOfThree(a,b,c){
  // Your answer here
  if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
    return "Error, at least one of these is not a number.";
  } else {
    let array = [a,b,c];
    array.sort(compare);
    console.log(array);
    return array[2];
  }
}
console.log(maxOfThree(5,35,300));
console.log(maxOfThree(783,1000,-555));
console.log(maxOfThree(-3, "negative 5", -4));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (isNaN(char)) {
      if (char.toUpperCase() === "A" || char.toUpperCase() === "E" || char.toUpperCase() === "I" || char.toUpperCase() === "O" || char.toUpperCase() === "U") {
        return true;
      } else {
        return char + " is not a vowel."
      }
    } else {
      return char + " is a number and not eligible for this function.";
    }

}
console.log(isVowel("a"));
console.log(isVowel("E"));
console.log(isVowel("K"));
console.log(isVowel(5));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(a,b) {
  if ( isNaN(a) || isNaN(b) ) {
    return "Hmm, one of these is not a number. Unable to compute."
  } else {
    return a + b;
  }
}
console.log(sum(1,2));
console.log(sum(-1,10));
console.log(sum(0.35,8.2));
console.log(sum("Hi","Justin"));
console.log(sum(10, "10"));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a, b, c) {
  if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
    return "Cannot return average, at least one of the parameters is not a number.";
  } else {
    return (a + b + c)/3;
  }
}
console.log(avg(1,2,3));
console.log(avg(-1,10,14));
console.log(avg("The", "Cat", "Hat"));



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(a) {
  if (!isNaN(a)) {
    return "Uh oh, you sure this is a string?";
  } else {
    return a.length;
  }
}
console.log(getLength("Justin"));
console.log(getLength("is a student at The Iron Yard."));
console.log(getLength(5));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (a, b) {
if ( isNaN(a) || isNaN(b) ) {
  return "Yikes, at least of these isn't a number!";
} else {
    if (b > a) {
      return true;
    } else {
      return false;
    }
}
}
console.log(greaterThan(5,10));
console.log(greaterThan(20,10));
console.log(greaterThan(500, "yeah"));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Justin"));
console.log(greet("Kim"));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(noun, verb, adverb, adjective) {
  return "The " + adjective + " bear quickly realized that the " + noun + " would catch on fire so it " + adverb + " called the fire department, hoping that the firemen would " + verb + " quickly."
}
console.log(madlib("frisbee", "surf", "lazily", "famished"));
