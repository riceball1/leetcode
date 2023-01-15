/*

Prompt



*/

// def calculate(self, s: str) -> int:
//         s = s.replace(" ", "")
//         stack = []    
// # looop through input 
//     currInt = 0
//     negative = False 
//     char = 0
//     while char < len(s)+1:
//         if char == len(s):
//             if negative:
//                 stack.append(-currInt)
//             else:
//                 stack.append(currInt)
//             char += 1
//             break
//         elif s[char].isdigit():  # not 100% sure if this is the way to check it 
//             currInt *= 10 
//             currInt += int(s[char])
//             char += 1
//         elif s[char] == '+':
//             if negative:
//                 stack.append(-currInt)
//             else:
//                 stack.append(currInt)
//             negative = False 
//             currInt = 0
//             char += 1
//         elif s[char] == '-':
//             if negative:
//                 stack.append(-currInt)
//             else:
//                 stack.append(currInt)
//             negative = True
//             currInt = 0 
//             char += 1
//         elif s[char] == '*' or s[char] == '/': 
//             # 1. get the previous 
//             prev = currInt
            
//             # 2. evaluate the next int
//             i = char+1
//             nex = 0 
//             while i < len(s) and s[i].isdigit():
//                 nex *= 10 
//                 nex += int(s[i])
//                 i += 1

            
//             # i will end at a point where s[i] is either an operator or expression 
//             if s[char] == '*':
//                 currInt = prev * nex
//             elif s[char] == '/':
//                 currInt = prev // nex
//                 # i should be the next operator or expression
//             char = i
//     return sum(stack)