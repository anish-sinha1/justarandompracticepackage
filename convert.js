"use strict";

//a converter function
const converter = function (sentence) {
  let capitalized = [];
  let words = sentence.split(" ");
  words.forEach((word) => {
    let capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    capitalized.push(capitalizedWord);
  });
  let converted = capitalized.join(" ");
  console.log("asdf");
  return converted;
};

module.exports = converter;
