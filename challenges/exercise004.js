export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallArr.push(nums[i]);
    }
  }
  return smallArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let nameArr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      nameArr.push(names[i]);
    }
  }
  return nameArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let retArr = [];
  const starts = "to" + " ";
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(starts)) {
      retArr.push(words[i]);
    }
  }
  return retArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let retArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      retArr.push(nums[i]);
    }
  }
  return retArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let retArr = []
  for (let j = 0; j < users.length; j++) {
    retArr.push(users[j].data.city.displayName)
  }
  return retArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let retArr = [];
  for (let k = 0; k < nums.length; k++) {
    retArr.push(Math.round(Math.sqrt(nums[k]) * 100) / 100);
  }
  return retArr;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let retArr = [];
  for (let l = 0; l < sentences.length; l++) {
    if (sentences[l].toLowerCase().includes(str.toLowerCase())) {
      retArr.push(sentences[l]);
    }
  }
  return retArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let retArr = [];
  for (let i = 0; i < triangles.length; i++) {
    let max = triangles[i][0];
    for (let j = 0; j < triangles[i].length; j++) {
      if (triangles[i][j] > max) {
        max = triangles[i][j];
      }
    }
    retArr.push(max);
  }
  return retArr;
}
