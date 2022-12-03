export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (sandwich.fillings && sandwich.fillings != null) {
    return sandwich.fillings;
  }
  return [];
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person?.city.toLowerCase() == "manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const busCapacity = 40;
  if (typeof people == "number" && people >= 0) {
    return Math.ceil(people / busCapacity);
  }
  return 0;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  if (arr && arr.length > 0) {
    return arr.filter(item => item == "sheep").length;
  }
  return 0;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return person && person.address && person.address.postCode && person.address.postCode.toUpperCase().startsWith("M")
    && person.address.city && person.address.city == "Manchester";
}
