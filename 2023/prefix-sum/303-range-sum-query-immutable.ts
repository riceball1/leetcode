// https://leetcode.com/problems/range-sum-query-immutable/

// Time O(n) - to create the prefixSum array; Space: O(n)
class NumArray {
    nums: number[];
    prefixSum: number[];

    constructor(nums: number[]) {
        this.nums = nums;
        this.prefixSum = [0];
        this.calculatePrefixSum()

    }

    calculatePrefixSum() {
        // num --> [-2,0,3,-5,2,-1]
        // prefixSum --> [0,-2,-2,1,-4,-2,-3]
        for(let i = 0; i < this.nums.length;i++){
            this.prefixSum[i+1] = this.prefixSum[i] + this.nums[i]
        }
    }
   
    sumRange(left: number, right: number): number {
        // By calculating the prefixSum ahead of time reduces this sumRange to a constant time operation
        return this.prefixSum[right+ 1] - this.prefixSum[left]
    }


    // // Time O(n) -- worst case the sumRange is the entire length
    // sumRange(left: number, right: number): number {
    //     let sum = 0;
    //     while(left <= right) {
    //         sum += this.nums[left]
    //         left++;
    //     }

    //     return sum;
    // }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */