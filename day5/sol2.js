let a = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

let board = [];
let row = [];
for (let i = 0; i < 1000; i++) {
  row.push(0);
}
for (let i = 0; i < 1000; i++) {
  board.push(JSON.parse(JSON.stringify(row)));
}

a = a.split("\n");
for (let i = 0; i < a.length; i++) {
  a[i] = a[i].split(" -> ");
}

for (let i = 0; i < a.length; i++) {
  let s = a[i][0].split(",");
  let d = a[i][1].split(",");
  if (s[0] == d[0] && s[1] != d[1]) {
    let x = parseInt(s[0]);
    let y1 = parseInt(s[1]);
    let y2 = parseInt(d[1]);
    if (y1 > y2) {
      let temp = y2;
      y2 = y1;
      y1 = temp;
    }
    for (let i = y1; i <= y2; i++) {
      board[x][i]++;
    }
  } else if (s[1] == d[1] && s[0] != d[0]) {
    let y = parseInt(s[1]);
    let x1 = parseInt(s[0]);
    let x2 = parseInt(d[0]);
    if (x1 > x2) {
      let temp = x2;
      x2 = x1;
      x1 = temp;
    }
    for (let i = x1; i <= x2; i++) {
      board[i][y]++;
    }
  } else if (s[0] == d[1] && s[1] == d[0]) {
    let x1 = parseInt(s[0]);
    let y1 = parseInt(s[1]);

    let x2 = parseInt(d[0]);
    let y2 = parseInt(d[1]);
    if (x1 < x2) {
      while (x1 <= x2) {
        board[x1][y1]++;
        x1++;
        y1--;
      }
    } else {
      while (x2 <= x1) {
        board[x2][y2]++;
        x2++;
        y2--;
      }
    }
  } else if (s[0] == s[1] && d[0] == d[1]) {
    let x1 = parseInt(s[0]);
    let y1 = parseInt(s[1]);

    let x2 = parseInt(d[0]);
    let y2 = parseInt(d[1]);

    if (x1 < x2) {
      while (x1 <= x2) {
        board[x1][y1]++;
        x1++;
        y1++;
      }
    } else {
      while (x2 <= x1) {
        board[x2][y2]++;
        x2++;
        y2++;
      }
    }
  } else {
    let x1 = parseInt(s[0]);
    let y1 = parseInt(s[1]);
    /**
     * 1 1 1 1 1
     * 1 1 1 1 1
     * 1 1 1 1 1
     * 1 1 1 1 1
     */
    let x2 = parseInt(d[0]);
    let y2 = parseInt(d[1]);
    let slo = (y2 - y1) / (x2 - x1);
    if (Math.abs(slo) == 1) {
      if ((x1 > x2 && y1 > y2) || (x1 < x2 && y1 < y2)) {
        if (x1 < x2) {
          while (x1 <= x2) {
            board[x1][y1]++;
            x1++;
            y1++;
          }
        } else {
          while (x2 <= x1) {
            board[x2][y2]++;
            x2++;
            y2++;
          }
        }
      } else {
        if (x1 < x2) {
          while (x1 <= x2) {
            board[x1][y1]++;
            x1++;
            y1--;
          }
        } else {
          while (x2 <= x1) {
            board[x2][y2]++;
            x2++;
            y2--;
          }
        }
      }
    }
  }
}

let count = 0;

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (board[i][j] >= 2) {
      count++;
    }
  }
}
console.log(count);
