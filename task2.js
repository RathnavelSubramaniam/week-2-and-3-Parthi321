//Instructions
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words)
{
  //your code here
  var words=[words,'How','Are','You'];
  return words.join(' ');
}

//console log results
console.log('Results', wordsToSentence(['Hey','There']));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    wordsToSentence,
  };
}
