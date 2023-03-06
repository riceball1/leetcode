// https://leetcode.com/problems/two-sum/description

function twoSum(nums: number[], target: number): number[] {
  let map = {
    [nums[0]]: 0, // set first element in map
  }; // keep track of the previously seen numbers

  for (let i = 1; i < nums.length; i++) {
    let neededNumber = target - nums[i];

    if (neededNumber in map) {
      return [map[neededNumber], i];
    }
    // otherwise add already seen numbers
    map[nums[i]] = i;
  }
  return [-1, -1]; // should never hit this since guaranteed one answer
}
