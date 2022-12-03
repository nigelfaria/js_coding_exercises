/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number" || n == 0) return 0;
  let num = Math.abs(n);
  let numStr = ('' + num).replace('.', '');
  return numStr.split('').reduce((sum, nChar) => parseInt(sum) + parseInt(nChar));
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) throw new Error("step is required");
  let toRet = [];
  if (Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(step)
    && step != 0 && (step > 0 ? end > start : start > end)) {
    if (step > 0) {
      for (let i = start; i <= end; i = i + step) {
        toRet.push(i);
      }
    } else {
      for (let i = start; i >= end; i = i + step) {
        toRet.push(i);
      }
    }
    if (toRet[toRet.length - 1] != end) {
      toRet.push(end);
    }
  }
  return toRet;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let toRet = []
  if (users && users.length > 0) {
    users.forEach(user => {
      if (user && user.username && user.screenTime && user.screenTime.length > 0) {
        user.screenTime.forEach(screenTimeObj => {
          if (screenTimeObj) {
            if (screenTimeObj.date == date) {
              if (screenTimeObj.usage) {
                if (Object.values(screenTimeObj.usage).reduce((sum, minutes) => sum + minutes, 0) > 100) {
                  toRet.push(user.username);
                }
              }
            }
          }
        });
      }
    });
  }
  return toRet;
};




/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let toRet = "";
  const hexRegex = /^#[A-F0-9]{6}$/
  if (hexStr) {
    let hexStrToCheck = hexStr.toUpperCase();
    if (hexRegex.test(hexStrToCheck)) {
      let tokens = [hexStrToCheck.slice(1, 3), hexStrToCheck.slice(3, 5), hexStrToCheck.slice(5, 7)].map(hexValue => parseInt(hexValue, 16));
      toRet = "rgb(" + tokens.join(",") + ")"
    }
  }
  return toRet;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");
  const gameSymbols = ["X", "0"]
  let toRet = "";
  let squaresCount = 0;
  const squareCountCheck = 9;

  if (board && board.length > 0) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (gameSymbols.includes(board[i][j]) || board[i][j] == null) {
          squaresCount++;
        }
        else {
          break;
        }
      }
    }
    if (squaresCount == squareCountCheck) {
      toRet = null;
      let result = gameSymbols.filter(symbol => {
        for (let i = 0; i < board.length; i++) {
          if (symbol == board[i][0] && symbol == board[i][1] && symbol == board[i][2]) {
            return true;
          }
        }
        for (let i = 0; i < board.length; i++) {
          if (symbol == board[0][i] && symbol == board[1][i] && symbol == board[2][i]) {
            return true;
          }
        }
        if (symbol == board[0][0] && symbol == board[1][1] && symbol == board[2][2]) {
          return true;
        }
        if (symbol == board[2][0] && symbol == board[1][1] && symbol == board[0][2]) {
          return true;
        }

      });
      if (result.length == 1) return result[0]
    }
  }
  return toRet;
};

