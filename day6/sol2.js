let a = `4,1,1,4,1,2,1,4,1,3,4,4,1,5,5,1,3,1,1,1,4,4,3,1,5,3,1,2,5,1,1,5,1,1,4,1,1,1,1,2,1,5,3,4,4,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,5,1,1,1,4,1,2,3,5,1,2,2,4,1,4,4,4,1,2,5,1,2,1,1,1,1,1,1,4,1,1,4,3,4,2,1,3,1,1,1,3,5,5,4,3,4,1,5,1,1,1,2,2,1,3,1,2,4,1,1,3,3,1,3,3,1,1,3,1,5,1,1,3,1,1,1,5,4,1,1,1,1,4,1,1,3,5,4,3,1,1,5,4,1,1,2,5,4,2,1,4,1,1,1,1,3,1,1,1,1,4,1,1,1,1,2,4,1,1,1,1,3,1,1,5,1,1,1,1,1,1,4,2,1,3,1,1,1,2,4,2,3,1,4,1,2,1,4,2,1,4,4,1,5,1,1,4,4,1,2,2,1,1,1,1,1,1,1,1,1,1,1,4,5,4,1,3,1,3,1,1,1,5,3,5,5,2,2,1,4,1,4,2,1,4,1,2,1,1,2,1,1,5,4,2,1,1,1,2,4,1,1,1,1,2,1,1,5,1,1,2,2,5,1,1,1,1,1,2,4,2,3,1,2,1,5,4,5,1,4`;
a = `3,4,3,1,2`;

a = a.split(",");
for (let i = 0; i < a.length; i++) {
  a[i] = parseInt(a[i]);
}
let d = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < a.length; i++) {
  d[a[i]] += 1;
}

for (let i = 0; i < 256; i++) {
  let d2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  d2[6] = d[0];
  d2[8] = d[0];
  for (let j = 0; j < 8; j++) {
    d2[j] += d[j + 1];
  }
  d = d2;
}

let sum = 0;
for (const s of d) {
  sum += s;
}

console.log(sum);
