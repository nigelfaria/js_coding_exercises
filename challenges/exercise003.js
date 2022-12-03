import { capitalize } from "./exercise001";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums?.length > 0) {
    return nums.map(num => num * num);
  }
  return [];
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words?.length > 0) {
    if (words[0].length > 0) {
      words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
    }
    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        words[i] = capitalize(words[i]);
      }
    }
    return words.join('');
  }
  return [];
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (people?.length > 0) {
    return people.reduce((subjectCount, person) => subjectCount + person?.subjects?.length, 0)
  }
  return 0;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  if (menu?.length > 0) {
    return menu.filter(item => item?.ingredients?.filter(aIng => aIng === ingredient).length > 0).length > 0;
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (arr1?.length > 0 && arr2?.length > 0) {
    return [... new Set(arr1.filter(number => arr2.includes(number)))].sort();
  }
  return [];
}
