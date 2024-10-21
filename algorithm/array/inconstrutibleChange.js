
 /* 
 Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you <b>cannot</b> create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).


  For example, if you're given <span>coins = [1, 2, 5]</span>, the minimum
  amount of change that you can't create is <span>4</span>. If you're given no
  coins, the minimum amount of change that you can't create is <span>1</span>.

Sample Input
 [5, 7, 1, 1, 2, 3, 22]

  Sample Output
 20
*/


// solution o(nlog(n))T | o(1) S

function nonConstructibleChange(coins) {
    // Write your code here.
   
    let currentChange = 0
    coins.sort((a ,b) => a - b)
  
      for(const coin in coins){
        if(coins[coin] > currentChange + 1){
            return currentChange + 1
        }else{
          currentChange += coins[coin] 
        }
      }
    return currentChange + 1
  }
  