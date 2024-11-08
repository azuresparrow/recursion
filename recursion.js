/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums[0] === undefined) return 1;
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words[0] === undefined) return 0;
  let tmp = longest(words.slice(1))
  return words[0].length > tmp ? words[0].length : tmp;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str[0] === undefined) return "";
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return str[0] == str[str.length -1] ? true || isPalindrome(str.slice(1,str.length-2)) : false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr[0] === undefined) return -1;
  if(arr[0] === val) return 0;
  let tmp =  findIndex(arr.slice(1), val);
  if(tmp >= 0)
    return tmp += 1;
  else 
    return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str[0] === undefined) return "";
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let collection = [];
  for (let key in obj) { 
    if(typeof obj[key] === "string") collection.push(obj[key]);
    if(typeof obj[key] === "object") collection.push(...gatherStrings(obj[key]));
  }
  return collection;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if(arr[0] === undefined) return -1;
  let mid = Math.floor((arr.length - 1) / 2);
  console.log(mid + "  " + arr  + "  " + val);
  if(arr[mid] === val) return mid;
  if(arr[mid] < val) {
    let tmp = binarySearch(arr.slice(mid + 1, arr.length), val);
    if(tmp >= 0) tmp += mid+1; // if found append earlier recursive index
    return tmp;
  } 
  return binarySearch(arr.slice(0, mid), val);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
