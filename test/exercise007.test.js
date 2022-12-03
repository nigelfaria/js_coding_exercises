import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";


describe("sumDigits", () => {
  test("returns sum of all digits", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(.123)).toBe(6);
    expect(sumDigits(5.3)).toBe(8);
    expect(sumDigits(-517)).toBe(13);
  });

  test("returns 0 for invalid input", () => {
    expect(sumDigits("asd")).toBe(0);
  });
});

describe("createRange", () => {
  test("returns a valid range", () => {
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
    expect(createRange(-3, 3, 3)).toStrictEqual([-3, 0, 3]);
    expect(createRange(-3, -11, -2)).toStrictEqual([-3, -5, -7, -9, -11]);
    expect(createRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    //Can step be fractional? 0.5, what about 0.3333. Assuming no for now
  });

  test("returns an empty array for invalid inputs", () => {
    expect(createRange(0, 0, 0)).toStrictEqual([]);
    expect(createRange(3, 11, -2)).toStrictEqual([]);
    expect(createRange(-3, -11, 2)).toStrictEqual([]);
    expect(createRange(3, 11, 0)).toStrictEqual([]);
    expect(createRange("three", "11")).toStrictEqual([]);

  });


});

describe("getScreenTimeAlertList", () => {
  test("returns array of users with > 100 minutes of screen time for a date", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-05-04")).toStrictEqual(["beth_1234"]);

    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 55, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 40, whatsApp: 70, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 37, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-06-13")).toStrictEqual(["sam_j_1989"]);

    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-06-13", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 55, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 40, whatsApp: 70, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 37, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-06-13")).toStrictEqual(["beth_1234", "sam_j_1989"]);


  });

  test("returns empty array is no user is found with > 100 minutes", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 55, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 40, whatsApp: 70, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 37, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-05-03")).toStrictEqual([]);
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 55, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 40, whatsApp: 70, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 37, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-06-14")).toStrictEqual([]);

  });


  test("returns empty array for invalid inputs", () => {
    expect(getScreentimeAlertList(
      [
      ]
      , "2019-06-14")).toStrictEqual([]);
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 55, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 40, whatsApp: 70, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 37, facebook: 0, safari: 31 } },
          ]
        },
      ]
      , "2019-14-06")).toStrictEqual([]);
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
        },
        {
          name: "Sam Jones",
        },
      ]
      , "2019-06-14")).toStrictEqual([]);

  });
});

describe("hexToRGB", () => {
  test("returns valid rgb strings when input is a valid hex string", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#CD34af")).toBe("rgb(205,52,175)");
    expect(hexToRGB("#808080")).toBe("rgb(128,128,128)");

  });
  test("returns empty strings for invalid hex strings", () => {
    expect(hexToRGB("#")).toBe("");
    expect(hexToRGB("")).toBe("");
    expect(hexToRGB("#FX1133")).toBe("");
  });
});

describe("findWinner", () => {
  test("returns correct winner", () => {
    expect(findWinner(
      [
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ]
    )).toBe("X");
    expect(findWinner(
      [
        ["X", "0", "0"],
        ["0", "X", "0"],
        ["X", "X", "0"]
      ]
    )).toBe("0");
    expect(findWinner(
      [
        ["X", "0", "0"],
        ["0", "X", "0"],
        ["X", "0", "X"]
      ]
    )).toBe("X");

  });

  test("returns null  for no winner ", () => {
    expect(findWinner(
      [
        ["X", "0", null],
        ["0", null, "0"],
        ["X", null, "0"]
      ]
    )).toBe(null);
    expect(findWinner(
      [
        ["X", "0", null],
        [null, "0", "0"],
        ["X", null, "0"]
      ]
    )).toBe(null);

  });

  test("returns empty string for bad inputs", () => {
    expect(findWinner(
      [
        ["X", "0", null],
        ["X", null, "0"]
      ]
    )).toBe("");
    expect(findWinner(
      [
      ]
    )).toBe("");
    expect(findWinner(
      [
        ["Y", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]

      ]
    )).toBe("");

  });

});
