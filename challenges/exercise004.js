export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallArr = [];
  nums.forEach(num => num < 1 ? smallArr.push(num) : 0);
  return smallArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let nameArr = [];
  names.forEach(name => name.startsWith(char) ? nameArr.push(name) : 0);
  return nameArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let retArr = [];
  const starts = "to" + " ";
  words.forEach(word => word.startsWith(starts) ? retArr.push(word) : 0);
  return retArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let retArr = [];
  nums.forEach(num => Number.isInteger(num) ? retArr.push(num) : 0);
  return retArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let retArr = []
  users.forEach(user => retArr.push(user.data.city.displayName));
  return retArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let retArr = [];
  nums.forEach(num => retArr.push(Math.round(Math.sqrt(num) * 100) / 100));
  return retArr;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let retArr = [];
  sentences.forEach(sentence => sentence.toLowerCase().includes(str.toLowerCase()) ? retArr.push(sentence) : 0);
  return retArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let retArr = [];
  triangles.forEach(triangle => {
    let max = 0;
    triangle.forEach(side => {
      if (side > max) {
        max = side;
      }
    })
    retArr.push(max);
  });
  return retArr;
}
