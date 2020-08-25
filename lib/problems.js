// Write a function, lucasNumberMemo(n), that takes in a number. The function
// should return the n-th number of the Lucas Sequence.
//
// The Lucas Sequence is like the Fibonacci Sequence, except that its two seed
// values are:
//   The 0-th number of the Lucas Sequence is 2.
//   The 1-st number of the Lucas Sequence is 1.
//
// To generate the next number of the sequence, you add up the previous two
// numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578

function lucasNumberMemo(n, memo = {}) {
    if(n in memo) return memo[n]
    if(n === 1) return 1;
    if(n === 0) return 2;

    memo[n] = lucasNumberMemo(n - 1) + lucasNumberMemo(n - 2)
    return memo[n];
}

// console.log(lucasNumberMemo(0))   // => 2
// console.log(lucasNumberMemo(1))   // => 1
// console.log(lucasNumberMemo(40))  // => 228826127
// console.log(lucasNumberMemo(41))  // => 370248451
// console.log(lucasNumberMemo(42))  // => 599074578

// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should return the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//


function minChange(coins, amount, memo = {}) {
    let min;
    let div;
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        div = amount / coin;
        for (let j = i; j < coins.length; j++) {
            let nextCoin = coins[j];
            if (coin + nextCoin === amount) {
                if (min < 2) {
                    return min;
                }
                return 2;
            }
            for (let k = 0; k < coins.length; k++) {
                let lastCoin = coins[k];
                if (coin + nextCoin + lastCoin === amount) {
                    // console.log(coin, nextCoin, lastCoin);
                    if (min < 3) {
                        return min;
                    }
                    return 3;
                }
            }
        }
        if (div % 0) {
            if (div < min) {
                min = div;
                console.log(`div: ${div}`);
                console.log(`min: ${min}`);
            }
        }
    }
    return min;
}

// Examples:
console.log(minChange([1, 2, 5], 11))         // => 3   , because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8))         // => 2    , because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15))    // => 2   , because 10 + 5 = 15


// console.log(minChange([1, 5, 10, 25], 100))   // => 4   , because 25 + 25 + 25 + 25 = 100

module.exports = {
    lucasNumberMemo,
    minChange
};
