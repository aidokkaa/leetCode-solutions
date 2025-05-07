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
}
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const n = 3
const nums2 = [2, 5, 6];

console.log(MergeSorted(nums1,nums2,m,n))