function minSubArrayLen(target, nums) {
  let left = 0;
  let total = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right]; 

    while (total >= target) {

      minLen = Math.min(minLen, right - left + 1);

      total -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
// function findLongestSubStrLength (string){
//  let left = 0;
//  let maxLen = 0;
//  let map = new Map();
//  for(let right = 0;right<string.length;right++){
//    char.set(string[right],right)
//  }
// }



// Longest Substring Without Repeating Characters
function longestlengthOfSubstr(string){
    let left = 0;
    let maxlen = 0;
    let charMap = new Map();
    for(let right = 0;right<string.length;right++){
      if(charMap.has(string[right]) && charMap.get(string[right]) >=left){
       left = charMap.get(string[right]) + 1;
      }
       charMap.set(string[right],right)
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen
}

function longestlengthOfSubstr(string){
   let left = 0;
   let set = new Set();
   let maxLen = 0
   for(let i = 0;i<string.length;i++){
      while(set.has(string[i])){
        set.delete(string[left]);
        left++
      }
      set.add(string[i])
       maxLen = Math.max(maxLen,i-left+1)
   }
  return maxLen;
}



