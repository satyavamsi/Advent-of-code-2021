let a = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

a = a.split("\n\n");

let inp = a[0].split(",");

let boards = [];

const fillBord = (board, val) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == val) {
        board[i][j] = -1;
      }
    }
  }
};

const checkBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    let row = true;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] != -1) {
        row = false;
        break;
      }
    }
    if (row) {
      return true;
    }
  }
  for (let i = 0; i < board.length; i++) {
    let row = true;
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] != -1) {
        row = false;
        break;
      }
    }
    if (row) {
      return true;
    }
  }
  return false;
};

for (let i = 1; i < a.length; i++) {
  boards.push(a[i]);
}

for (let i = 0; i < boards.length; i++) {
  boards[i] = boards[i].split("\n");
  for (let j = 0; j < boards[i].length; j++) {
    boards[i][j] = boards[i][j].trim().split(" ");
    let fin = [];
    for (let k = 0; k < boards[i][j].length; k++) {
      if (boards[i][j][k].trim().length === 0) {
        continue;
      }
      fin.push(boards[i][j][k]);
    }
    boards[i][j] = fin;
  }
  console.log(boards[i]);
}

let comple = false;

let resule = 0;

for (let i = 0; i < inp.length; i++) {
  //   if (comple) {
  //     break;
  //   }
  for (let j = 0; j < boards.length; j++) {
    fillBord(boards[j], inp[i]);
    let isComple = checkBoard(boards[j]);
    if (isComple) {
      console.log(inp[i]);
      console.log(boards[j]);
      resule = 0;
      comple = true;
      for (let k = 0; k < boards[j].length; k++) {
        for (l = 0; l < boards[j][k].length; l++) {
          if (boards[j][k][l] != -1) {
            resule += parseInt(boards[j][k][l]);
          }
        }
      }
      resule = resule * inp[i];
      boards.splice(j, 1);
      j--;
    }
  }
}

console.log(resule);
