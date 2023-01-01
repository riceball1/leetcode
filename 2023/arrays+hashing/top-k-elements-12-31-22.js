// https://leetcode.com/problems/top-k-frequent-elements

function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    const bucket = [];
    const result = [];

    // adds the nums to the frequencyMap
    for(const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // use a bucket sorting method to put the numbers into an array
    for(const [num, freq] of frequencyMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    // push the elements into the result starting from largest end of the bucket sorted array
    for(let i = bucket.length; i > 0; i--) {
        if(bucket[i]) result.push(...bucket[i])
        if(result.length === k) break;
    }

    return result;
}

// Test Cases
console.log(topKFrequent([1,1,1,2,2,3], 2), [1, 2])
console.log(topKFrequent([1], 1), [1])