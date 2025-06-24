// Two Sum
var twoSum = function(nums, target) {
 let obj = {};
 for(let i= 0;i<nums.length;i++){
   obj[nums[i]]=i;
    const remainder = target-nums[i];
    if(remainder in obj){
        return i
    }
 }
};

// RansomNote

let can = function ransomNote(magazine,ransomNote){
  let letters = {};
  for(let char of magazine){
    if(!letters[char]){
      letters[char]=1
    }else{
      letters[char]++;
    }
  }
  for(let char of ransomNote){
    if(!letters[char]){
     return false;
    }
    else{
      letters[char]--
    }
  }
  return true
}