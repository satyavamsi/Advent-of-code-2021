const p = (a) => {
  return parseInt(a);
};

let a = `00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`;

a = a.split("\n");
let g = "";
let e = "";
let c = JSON.parse(JSON.stringify(a));
let c1 = 0;
let c0 = 0;
for (let i = 0; i < a[0].length; i++) {
  if (a.length == 1) {
    break;
  }
  for (let j = 0; j < a.length; j++) {
    if (a[j][i] == "0") {
      c0++;
    } else {
      c1++;
    }
  }
  let b = [];

  if (c1 >= c0) {
    for (let j = 0; j < a.length; j++) {
      if (a[j][i] == "1") {
        b.push(a[j]);
      }
    }
  } else {
    for (let j = 0; j < a.length; j++) {
      if (a[j][i] == "0") {
        b.push(a[j]);
      }
    }
  }
  c1 = 0;
  c0 = 0;
  a = b;
}
let ox = a[0];

a = c;

for (let i = 0; i < a[0].length; i++) {
  if (a.length == 1) {
    break;
  }
  for (let j = 0; j < a.length; j++) {
    if (a[j][i] == "0") {
      c0++;
    } else {
      c1++;
    }
  }
  let b = [];

  if (c1 >= c0) {
    for (let j = 0; j < a.length; j++) {
      if (a[j][i] == "0") {
        b.push(a[j]);
      }
    }
  } else {
    for (let j = 0; j < a.length; j++) {
      if (a[j][i] == "1") {
        b.push(a[j]);
      }
    }
  }
  c1 = 0;
  c0 = 0;
  a = b;
}

let co = a[0];

let result = parseInt(ox, 2) * parseInt(co, 2);

console.log(result);
