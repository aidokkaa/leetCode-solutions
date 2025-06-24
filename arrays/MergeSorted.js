function MergeSorted (nums1,nums2,m,n){
    let a = m-1;
    let b = n-1;
    let k = m+n-1;
    while(b>=0){
      if(nums1[a]>nums2[b]){
        nums1[k]=nums1[a]
        a--;
      }else{
            nums1[k]=nums2[b];
            b--
        
      }
      k--
      
    }
    return nums1
}
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const n = 3
const nums2 = [2, 5, 6];

console.log(MergeSorted(nums1,nums2,m,n))



// REmove Element
const nums = [1, 2,2, 3, 3, 0, 0, 0];
const val =3
function removeElem (nums,val){
  let k  =0
  for(let i = 0;i<nums.length;i++){
    if(nums[i]!==val)
      k++
  }
  return k
}
removeElem(nums,val)
  
// Remove Duplicates from Sorted Array
const arr = [1,1,2,3,4,5]
const removeDuplicates=()=>{
  let k = 0;
  for(let  i = 1;i<arr.length;i++){
    if(arr[i]!==arr[k]){
      k++;
      arr[k]=arr[i]
    }
  }
  return k
}

const removeDuplicates2=()=>{
  let  k = 1;
  for(let i = 1;i<arr.length;i++){
    if(arr[i]!==arr[k-1]){
      arr[k]=arr[i]
      k++
    }
  }
  return k
}
console.log(removeDuplicates2(arr))


// Reverse Words in a String (Array/String)
// Firstly, need to remove leading or trailing spaces using trim() method. After split string into Array. Filter getting rid of extra blank lines.Reverse.Then
var reverseWords = function(s) {
    return s.trim().split(' ').filter(item=>item!=='').reverse().join(' ')
};

var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({ length: numRows }, () => '');
    let currRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currRow] += char;

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};
function spinWords(string){
  let str = ''
  const splittingArray = string.split(' ');
  for(let letter of splittingArray){
   if(letter.length>=5){
     str += letter.split('').reverse().join('')
   }else{
     str+=letter
   }
    str+=' '
  }
  return str;
}
console.log(spinWords("Hey wollef sroirraw"))

// The old switcheroo
function vowel2index(str) {
  const vowels = 'aeiouAEIOU'; 
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.includes(letter)) {
      result += (i + 1).toString();
    } else {
      result += letter;
    }
  }

  return result;
}
console.log(vowel2index('The United States'))

