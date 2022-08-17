// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

var plusOne = function(digits) {
    // Loop through array starting from the last digit
    for(let i=digits.length-1; i>=0; i--){
        // If the digit is less than 9, increment the digit by 1, then exit the for loop.
        if(digits[i] < 9) {
            digits[i]++;
            break;
            // If you are at the first digit of the array, set it to zero, then set digits to a new array beginning with 1 then the rest of the digits array
        } else if (i === 0) {
            digits[0] = 0
            digits = [1].concat(digits)
            break;
        } else {
            // If digit is 9 or greater, but not at the first digit of the array
            digits[i] = 0
        }
    }
    return digits;

};

// Tests
console.log(plusOne([1,2,3]));