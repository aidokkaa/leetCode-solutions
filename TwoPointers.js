// Is Subsequence (Two Pointers )
// Core Idea
// We iterate through both strings, s and t, using two pointers.
// We move through t one character at a time, always advancing its pointer (k++).
// If a character in s matches the current character in t, we move to the next character in s (i++).
// Even if the characters don’t match, we still move forward in t.
// This way, we check whether all characters in s appear in order within t.
// If we reach the end of s (i === s.length), it means s is a subsequence of t.
var isSubsequence = function(s, t) {
    let i = 0;
    let k = 0;
    while(i<s.length && k<t.length){
      if(s[i]===t[k]){
        i++;
      }
      k++;
    }
    return i===s.length
};


// Two Sum (Two Pointers)
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1
  while(left<right){
    if(numbers[left]+numbers[right] == target){
    return [left+1,right+1]}
    else if(numbers[left]+numbers[right] > target){
     right--
    }
    else{
      left++
    }
  
    }
    return []
  }
  

console.log(twoSum([2,7,11,15],9))

var isPalindrome = function(s) {
    let str=''
    for(let i  = 0;i<s.length;i++){
      let letterLower = s[i].toLowerCase()
        if((letterLower<='z' && letterLower>='a') || (letterLower<='9' && letterLower>='0') ){
            str+=letterLower                                                                               
        }
    };
    let start= 0
    let last  = str.length-1;
    while(start<last){
        if(str[start]!==str[last]){
            return false
        }
        start++;
        last--
    }
     return str
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Valid Palindrom (Two Pointers )
// function isPalindrom (s){
//   let str = ''
//   let start = 0;
//   let last = s.length-1;
//   for(let  i = 0;i<s.length;i++){
//     const char = s[i].toLowerCase()    
//     if(char>='a' && char<='z' || char>='0' && char<='9'){
//       str+=char
//     }  
//   }
//   last = str.length-1
//   while(start<=last){
//     if(str[start]!==str[last]){
//       return false;
//     }
//     start++;
//     last--
//   }
//   return str
// }
// console.log(isPalindrom('Qa!za)q!'))


// function validPalindrom2(s){
//   let start = 0;
//   let last = s.length-1
//   for(let i = 0;i<s.length;i++){
//     let startIndex = s[start].toLowerCase()>='a' && s[start].toLowerCase()<='z' || s[start]>='0' &&s[start]<'9'
//     let lastIndex = s[last].toLowerCase()>='a' && s[last].toLowerCase()>='z' || s[last]>='0' &&s[last]<'9'
//     if(startIndex!==lastIndex){
//       return false
//     }
//     start++;
//     last--;
//   }
//   return  true
// }
// console.log(validPalindrom2('Qa!za)q!'))



// function validPalindrome2(s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     while (
//       left < right &&
//       !(
//         (s[left].toLowerCase() >= 'a' && s[left].toLowerCase() <= 'z') ||
//         (s[left] >= '0' && s[left] <= '9')
//       )
//     ) {
//       left++;
//     }

//     while (
//       left < right &&
//       !(
//         (s[right].toLowerCase() >= 'a' && s[right].toLowerCase() <= 'z') ||
//         (s[right] >= '0' && s[right] <= '9')
//       )
//     ) {
//       right--;
//     }

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(validPalindrome2('Qa!za)q!')); // true



// .Container with most water

var maxArea = function(height) {
  let left = 0;
  let right = height.length-1;
  let maxArea = 0
  while(left < right){
    let w = right-left;
    let h = Math.min(height[left],height[right]);
    let area = w * h;
   maxArea= Math.max(maxArea,area);
   if(height[left]<height[right]){
    left++;
   }else{
    right--
   }
  } 
  return maxArea; 
};