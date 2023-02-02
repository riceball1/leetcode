// https://leetcode.com/problems/first-bad-version


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let badVersion = null;
        let start = 1;
        let end = n;
        
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            
            if(isBadVersion(mid)) { // if bad version 
                badVersion = mid; // update the badVersion
                end = mid - 1; // move the end down
            } else {
                start = mid + 1; // otherwise move start up
            }
        }
        return badVersion;
    };
};