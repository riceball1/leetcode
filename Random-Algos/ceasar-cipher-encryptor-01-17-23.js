// Ceasar Cipher https://www.algoexpert.io/questions/caesar-cipher-encryptor

/*
let string = 'xyz'
key = 2

output = 'zab'


*/


function encryptor(str, key) {
    // A - Z lengths
    let a = 'a'.charCodeAt(0) // 97 
    let z = 'z'.charCodeAt(0) // 122
  
    let newKey = key % 26;
    let encrypted = "";
  
    for (let i = 0; i < str.length; i++) {
      let currNum = str.charCodeAt(i)
      if ((currNum + newKey) <= z) {
        encrypted += String.fromCharCode((currNum + newKey))
      } else {
        const num = (currNum + newKey) - 122 + 97 - 1;
        encrypted += String.fromCharCode(num)
      }
    }
    return encrypted;
  }
  
  console.log(encryptor("xyz", 2))
  console.log(encryptor('abc', 52))