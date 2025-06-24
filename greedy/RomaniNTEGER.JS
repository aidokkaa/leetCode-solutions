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


 // IntegerToRoman

  var intToRoman = function(num) {
    const symbols = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < symbols.length; i++) {
      while (num >= symbols[i].value) {
        result += symbols[i].symbol;
        num =num - symbols[i].value;
      }
    }
  
    return result;
  };
  
  console.log(intToRoman(1994)); 
  