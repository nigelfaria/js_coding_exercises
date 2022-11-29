export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let toRet = null;
  let index = nums.indexOf(n);
  if (index != -1 && index + 1 < nums.length) {
    toRet = nums[index + 1];
  }
  return toRet;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let countMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (countMap.has(str[i])) {
      countMap.set(str[i], countMap.get(str[i]) + 1);
    } else {
      countMap.set(str[i], 1);
    }
  }
  return { 1: countMap.get("1") || 0, 0: countMap.get("0") || 0 };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  let reverse = 0;
  while (n > 0) {
    reverse = 10 * reverse + n % 10;
    n = Math.trunc(n / 10);
  }
  return reverse;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce((sum, innerArr) => sum + innerArr.reduce((innerSum, num) => innerSum + num), 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let retArr = [...arr];
  if (retArr.length > 1) {
    let swap = retArr[0];
    retArr[0] = retArr[retArr.length - 1];
    retArr[retArr.length - 1] = swap;
  }
  return retArr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const toSearch = searchTerm.toLowerCase();
  return Object.values(haystack).filter(item => typeof (item) == "string" && item.toLowerCase().includes(toSearch)).length > 0;

};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const punctuationRegEx = /[,?!"]/g;
  let words = str.replaceAll(punctuationRegEx, '').toLowerCase().split(' ');
  let wordCount = new Map();
  words.forEach(word => wordCount.has(word) ? wordCount.set(word, wordCount.get(word) + 1) : wordCount.set(word, 1));
  let retObj = {};
  wordCount.forEach((value, key) => retObj[key] = value);
  return retObj;
};
