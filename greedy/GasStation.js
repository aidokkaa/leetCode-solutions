// Logic:
// If the total tank (the total amount of gas we have) is less than 0 (the total cost to travel), return -1.
// Otherwise, find the starting gas station we can start from and return it.
// Time Complexity: O(n)
var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let currentTank = 0;
    let startInd = 0
    for(let i = 0;i<gas.length;i++){
      let remainder = gas[i]-cost[i];
      totalTank = totalTank+remainder;
      currentTank+=remainder;
      if(currentTank<0){
          startInd=i+1;
          currentTank=0; 
      }
    }
    return totalTank<0 ? -1 : startInd 
  };


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
  
  console.log(intToRoman(1994)); // Output: "MCMXCIV"
  