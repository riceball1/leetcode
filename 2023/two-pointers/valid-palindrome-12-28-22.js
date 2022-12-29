/*

https://leetcode.com/problems/valid-palindrome

This problem I am unable to solve initially, the following is a good clean solution that's easy to follow

Solution link: https://leetcode.com/problems/valid-palindrome/solutions/2438656/very-easy-100-fully-explained-java-c-python-js-python3/?orderBy=most_votes&languageTags=javascript

Time Complexity: O(n)
Space Complexity: O(1)

*/

var isPalindrome = function(s) {
    // Base case
    if(s==null)  return false;
    // Take in lowercase character...
    s = s.toLowerCase();
    // Initialize two pointer variables, left and right and point them with the two ends of the input string...
    let left = 0;
    let right = s.length - 1;
    // Traverse all elements through the loop...
    while(left < right){
        // Move the left pointer to right so it points to a alphanumeric character...
        while(left < right && !((s.charAt(left) >= 'a' && s.charAt(left) <= 'z') || (s.charAt(left) >= '0' && s.charAt(left) <= '9'))){
            left++;
        }
        // Similarly move right pointer to left so it also points to a alphanumeric character...
        while(left < right && !((s.charAt(right) >= 'a' && s.charAt(right) <= 'z') || (s.charAt(right) >= '0' && s.charAt(right) <= '9'))){
            right--;
        }
        // Check if both the characters are same...
        // If it is not equal then the string is not a valid palindrome, hence return false...
        if(s.charAt(left) != s.charAt(right)){
            return false;
        }
        // If same, then continue to next iteration and move both pointers to point to next alphanumeric character till left < right...
        left++;
        right--;
    }
    // After loop finishes, the string is said to be palindrome, hence return true...
    return true;
};