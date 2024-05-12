/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1_list = str1.toLowerCase().split('').sort();
  let str2_list = str2.toLowerCase().split('').sort();

  console.log(str1_list);
  console.log(str2_list);

  if(str1_list.length != str2_list.length) {
    return false;
  }
  for(let i = 0; i < str1_list.length; i++) {
    if(str1_list[i] != str2_list[i]) {
      return false;
    }
  }
  return true;
}

// let ans = isAnagram('Debit Card', 'Bad Credit');
// console.log(ans);

module.exports = isAnagram;
