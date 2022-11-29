import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} from "../challenges/exercise006";


describe("sumMultiples", () => {
  test("returns sum of multiples of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 2, 5])).toBe(5);
    expect(sumMultiples([1, 2, 7])).toBe(0);
    expect(sumMultiples([15, 2, 4, 3])).toBe(18);
    expect(sumMultiples([-15, 2, 4, 3])).toBe(-12);
    expect(sumMultiples([])).toBe(0);
  });

  test("throws an error if not passed an array", () => {
    expect(() => sumMultiples("not an array")).toThrow('arr is required');
  });
});

describe("isValidDNA", () => {
  test("returns true if it is a valid DNA string", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("TAGTC")).toBe(true);
  });

  test("returns false for empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("returns false for invalid DNA string", () => {
    expect(isValidDNA("B")).toBe(false);
    expect(isValidDNA(2)).toBe(false);
    expect(isValidDNA("whats up")).toBe(false);
  });

  test("returns false for lowercase DNA string", () => {
    expect(isValidDNA("cgta")).toBe(false);
  });

});

describe("getComplementaryDNA", () => {
  test("returns valid complementary DNA string", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("T")).toBe("A");
    expect(getComplementaryDNA("C")).toBe("G");
  });

  test("returns empty string for invalid dna string", () => {
    expect(getComplementaryDNA("")).toBe("");
    expect(getComplementaryDNA("B")).toBe("");
    expect(getComplementaryDNA("a")).toBe("");
    expect(getComplementaryDNA(5)).toBe("");
  });

});

describe("isItPrime", () => {
  test("returns true for prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(997)).toBe(true);
    expect(isItPrime(23)).toBe(true);

  });

  test("returns false for non-prime numbers", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(-3)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(222222)).toBe(false);
  });

  test("returns false for bad inputs", () => {
    expect(isItPrime("what")).toBe(false);
    expect(isItPrime({})).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a matrix for valid inputs", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    expect(createMatrix(2, "foo")).toStrictEqual([["foo", "foo"], ["foo", "foo"]]);
    expect(createMatrix(2, 47)).toStrictEqual([[47, 47], [47, 47]]);
    expect(createMatrix(2, {})).toStrictEqual([[{}, {}], [{}, {}]]);

  });
  test("returns an empty array for invalid inputs", () => {
    expect(createMatrix(0, "foo")).toStrictEqual([]);
    expect(createMatrix(-1, "foo")).toStrictEqual([]);
    expect(createMatrix(5.2, "foo")).toStrictEqual([]);
  });

});

describe("areWeCovered", () => {
  test("returns true if staffing levels are 3 or more", () => {
    const rota = [{ name: "Mbappe", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Rashford", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Gakpo", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Valencia", rota: ["Wednesday", "Thursday", "Saturday"] },
    { name: "Fernandes", rota: ["Wednesday", "Thursday", "Saturday"] },
    { name: "Morata", rota: ["Wednesday", "Thursday", "Saturday"] }
    ];
    expect(areWeCovered(rota, "Monday")).toBe(true);
    expect(areWeCovered(rota, "Tuesday")).toBe(true);
    expect(areWeCovered(rota, "Wednesday")).toBe(true);
    expect(areWeCovered(rota, "Thursday")).toBe(true);
    expect(areWeCovered(rota, "Friday")).toBe(true);
    expect(areWeCovered(rota, "Saturday")).toBe(true);

  });

  test("returns false if staffing levels are below 3", () => {
    const rota = [{ name: "Mbappe", rota: ["Monday"] },
    { name: "Rashford", rota: ["Tuesday",] },
    { name: "Gakpo", rota: ["Friday"] },
    { name: "Valencia", rota: ["Wednesday"] },
    { name: "Fernandes", rota: ["Thursday"] },
    { name: "Morata", rota: ["Saturday"] }
    ];
    expect(areWeCovered(rota, "Monday")).toBe(false);
    expect(areWeCovered(rota, "Tuesday")).toBe(false);
    expect(areWeCovered(rota, "Wednesday")).toBe(false);
    expect(areWeCovered(rota, "Thursday")).toBe(false);
    expect(areWeCovered(rota, "Friday")).toBe(false);
    expect(areWeCovered(rota, "Saturday")).toBe(false);
    expect(areWeCovered(rota, "Sunday")).toBe(false);

  });

  test("returns false if inputs are invalid", () => {
    const rota = [{ name: "Mbappe", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Rashford", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Gakpo", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Valencia", rota: ["Wednesday", "Thursday", "Saturday"] },
    { name: "Fernandes", rota: ["Wednesday", "Thursday", "Saturday"] },
    { name: "Morata", rota: ["Wednesday", "Thursday", "Saturday"] }
    ];

    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered(rota, "")).toBe(false);

  });

});