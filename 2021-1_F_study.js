// 1st week

// No 1
// console.log(isElement([1,2,3,4,5], 5)) //  => true
// console.log(isElement(["a", "b", "c"], "a")) // => true
// console.log(isElement(["a", "b", "c"], "d"))  // => false


// function isElement(array, ele){
//     for ( var arr of array) { 
//       if ( ele === arr) {
//         return true 
//       }
//     }
//     return false 
// }





//No 2 (bubble sort)

// console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
// console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
// console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
// console.log(twoHighest([1, 2, 2])) // [2, 2];



function twoHighest(arr) {
    let firstHigh = 0; // 10
    let secdHigh = 0 // 8

    for(let i = 0; i < arr.length; i++){
      let cur = arr[i] //
 
      if (cur > firstHigh){
        firstHigh = cur
      }
    }
   
    let idx = arr.indexOf(firstHigh) // 2
    arr[idx] = 0
     
    for(let j = 0; j < arr.length; j++){
      if( arr[j]> secdHigh ) {
        secdHigh = arr[j];
      }
    }
   
    return [secdHigh,firstHigh]
}


//or


// function twoHighest(arr) {
//     let highest = null; // 10
//     let secondHighest = null // 1

//     for(let i = 0; i < arr.length; i++){
//       let cur = arr[i]

//       if( cur >= highest) {
//         secondHighest = highest;
//           highest = cur
//        }
//       if(cur < highest && cur > secondHighest ) {
//           secondHighest = cur
//       }

//     }
//     return [secondHighest,highest]
// }




// no 3
// console.log(searchInsert([1,3,5,6],5)) // 2
// console.log(searchInsert([1,3,5,6],7)) // 4
// console.log(searchInsert([1,3,5,6],0)) // 0

// function searchInsert (nums, target) {
//     let start = 0,
//     end = nums.length - 1;
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (nums[mid] === target) 
//       return mid;
//       else if (nums[mid] < target) start = mid + 1;
//       else end = mid - 1;
//     }
//     return end + 1;
// };
    

// no 4

// console.log(reverseWords("Let's take LeetCode contest"))
//s'teL ekat edoCteeL tsetnoc

// function reverseWords(s) {
//     s = s.split(" "); //['Let's, 'take', 'LeetCOde', 'contest']
//     let res = [];
//     for(let i = 0; i < s.length; i++){
//         console.log(s[i] =  s[i] + " ")
//         for(let j = s[i].length - 1; j >= 0; j--){
//             res.push(s[i][j]);
//         } 
//     }
//     return res.join("");
// };


// function reverseWords(s)  {
//   s =  s.split(' ')  //['Let's, 'take', 'LeetCOde', 'contest']
//   var res = []
//   for(let j = s.length-1; j >=0; j--) {
//     res.push(s[j])  
//   }  
//    return res.join(" ");
// }



// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']) )// => []
// console.log(intersect("ab", ["ad","bd","aaab","baa","badab"])) 
//Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// function intersect(arr1, arr2) {
//   var newArr = []
// for (var arr of arr1) {      // arr = arr1[i]
//   for (var arrs of arr2) {
//     if (arr.indexOf(arrs)  > -1 ) {
//         newArr.push(arrs)
//       }
//     }
//   }
//   return newArr
// }

function intersect(arr1, arr2) {
  var newArr = []
  
  for (var word of arr2) {      // ad
   for (let j = 0; j < word.length; j++) {
    const char = word[j];     // a , d 
      if (!arr1.includes(char)) 
      break;  // !ab.includes(ad)  or ab.includes(aaab)
      else if( j === word.length -1) // aaab -> j === 3
      newArr.push(word)  // [aaab,baa]
      }
    }
  return newArr.length
  }




  


  

  // 2021.2.19

// 1. Write a function firstOrLast(array) that takes in an array and returns either:

// - the first element if there is an even number of elements in the array

// - the last element if there is an odd number of elemetns in the array

// You can assume the array contains at least one element.

// Examples:
// console.log(firstOrLast(['a', 'b', 'c', 'd'])) //  => 'a'
// console.log(firstOrLast(['Jenny', 'Mary', 'Mark'])) // => 'Mark'




function firstOrLast(array) {
    var newStr = ''
    for ( var str of array ) {
        if ( array.length % 2 === 0) {
            return array[0]
        }
    }
    return array[array.length-1]
}


// 2. Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
// Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
// should be in reverse-sequential order.

// Examples:

// console.log(mysticNumbers(25))  // => [ 20, 18, 16, 8, 6, 4 ] // [6,4]
// console.log(mysticNumbers(14))  // => [ 8, 6, 4 ]


function mysticNumbers(max) {
  var newArr = []
  for ( let i = 4; i < max; i++) { // for (-)
    if ((i % 4 ===0 || i % 6 === 0) &&  !(i % 4 ===0 && i % 6 === 0)) { 
      // if   !(i % 4 ===0 && i % 6 === 0)) 
      // continue;
      //  else if ((i % 4 ===0 || i % 6 === 0) 
      // if ((i % 4 ===0 || i % 6 === 0) && !(i % 12 ===0)) {
      newArr.unshift(i) // push
    }
  }
  return newArr
}






// 3. https://leetcode.com/problems/count-the-number-of-consistent-strings/
//console.log(intersect("ab", ["ad","bd","aaab","baa","badab"])) 
//Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


function intersect(arr1, arr2) {
  var newArr = []
  
  for (var word of arr2) {      // ad
   for (let j = 0; j < word.length; j++) {
    const char = word[j];     // a , d 
      if (!arr1.includes(char)) 
      break;  // !ab.includes(ad)   or ab.includes(aaab)
      else if( j === word.length -1) // aaab -> j === 3
      newArr.push(word)  // [aaab,baa]
      }
    }
  return newArr.length
  }




// 4. https://leetcode.com/problems/reverse-vowels-of-a-string/
// console.log(reverseVowels("hello"))  // "holle"
// console.log(reverseVowels("leetcode")) //"leotcede"

function reverseVowels (s) {
  let letters = s.split('');
  let i = 0;
  let j = letters.length - 1;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  while (i < j) {
    let temp = '';
    if (vowels.includes(letters[i]) && vowels.includes(letters[j])) {
      temp = letters[i]; //o
      letters[i] = letters[j]; // o = e
      letters[j] = temp; // e = o
      i++;
      j--;
    } else if (!vowels.includes(letters[i])) {  // non-vowels
      i++;
    } else {
      j--;
    }
  }
  

  return letters.join('');
};





// 5. https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// console.log(lengthOfLongestSubstring("abcabcbb")) // 3 (abc)
// console.log(lengthOfLongestSubstring("pwwkew")) // 3 pw < wke


function  lengthOfLongestSubstring (s) {
  let max = 0
  let sub = []
  for (i = 0; i < s.length-1; i++) { // p
    sub.push(s[i])
    for (j = i+1; j<s.length; j++) { // w
      if (!sub.includes(s[j])) { // p.includes(w)
        sub.push(s[j]) // p, w
        if (max < sub.length) { // 0 < 2
          max = sub.length // max = 2
        }
      }
      else { 
        sub = []
        break;
      }
    }
  }
  return max;
};