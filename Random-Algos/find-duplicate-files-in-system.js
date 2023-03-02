// https://leetcode.com/problems/find-duplicate-file-in-system/

/*
Details
Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"
 

Example 1:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
Example 2:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 

Constraints:

1 <= paths.length <= 2 * 104
1 <= paths[i].length <= 3000
1 <= sum(paths[i].length) <= 5 * 105
paths[i] consist of English letters, digits, '/', '.', '(', ')', and ' '.
You may assume no files or directories share the same name in the same directory.
You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.
 

Follow up:

Imagine you are given a real file system, how will you search files? DFS or BFS?
If the file content is very large (GB level), how will you modify your solution?
If you can only read the file by 1kb each time, how will you modify your solution?
What is the time complexity of your modified solution? What is the most time-consuming part and memory-consuming part of it? How to optimize?
How to make sure the duplicated files you find are not false positive?
*/

// https://leetcode.com/problems/find-duplicate-file-in-system
// details about solution https://leet-codes.blogspot.com/2022/09/609-find-duplicate-file-in-system.html
/**
 * @param {string[]} paths
 * @return {string[][]}
 * 
 * Time Complexity: O(N + C) where N is the total number of files and C is the number of different keys in Map
 * Space Complexity: O(N) for N files in Map
 * 
 * 
 * Example input:
 * paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
 * 
 * expected output:
 * [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 * 
 */
var findDuplicate = function (paths) {
    let map = {}, ans = []
    for (path of paths) {


        /* using destructuring able to pull out the initial root file
            from the first part of path, and store the rest into a variable called files

            const paths1 = [ "root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)" ]
            e.g. for paths1

            root/a [ '1.txt(abcd)', '2.txt(efgh)' ]
            root/c [ '3.txt(abcd)' ]
            root/c/d [ '4.txt(efgh)' ]
        */
        let [ root, ...files ] = path.split(' ');


        for (file of files) {
            /*
                iterating over each file in the files
                e.g. [ '1.txt(abcd)', '2.txt(efgh)' ]

                get fileName and content
                '1.txt(abcd)' --> fileName: 1.txt content: (abcd)

            */
            let [ fileName, content ] = file.split('(');

            // add to a map using the content as the key, then including the file as the values
            if (map[ content ]) {
                map[ content ].push(`${root}/${fileName}`)
            }
            else {
                map[ content ] = [ `${root}/${fileName}` ]
            }
        }
    }

    // once the map is created, iterate over it to determine which ones has duplicates, and use that to push into the ans array
    for (entry in map) {
        if (map[ entry ].length > 1) {
            ans.push(map[ entry ]);
        }
    }
    return ans


};

// Test Cases
const paths1 = [ "root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)" ]
console.log(findDuplicate(paths1)) 
// [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]

// const paths2 = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
// console.log(findDuplicate(paths2)) 
// // [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]