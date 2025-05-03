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