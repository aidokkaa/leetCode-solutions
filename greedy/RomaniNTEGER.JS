// Solution for task 'Roman To Integer'
// According to the Roman numeral system, numbers are written from greater to lesser values. That's why we subtract the current value from the next value if the next value is greater.
var romanToInt = function(s) {
    const values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
     let total=0
    for(let i = 0;i<s.length;i++){
        let currItem = values[s[i]];
        let nextItem = values[s[i+1]];
       
        if(currItem<nextItem){
         total+=nextItem-currItem;
         i++;
        }else{
           total+=currItem
        }
    }
    return total;
};
console.log(romanToInt('XCII'))