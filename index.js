function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {

      const CompNumber = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === CompNumber) {
        return true;
        }
      }
    }
    return false;
  }
  


/* 
  Write the Big O time complexity of your function here
*/ 
//O(N^2)
/* 
  Add your pseudocode here
*/
 // iterate over the array of numbers
  //   for the current number, identify a complementary number that iff we add up, it equals our target
  //   (for example: if our number is 4, and the target is 9, the complementary number is 5)
  //   iterate over the remaining numbers in the array checking if the complementary number is in the array
  //       if there is, return true
  // if we get the end of the array without gettinig any, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;