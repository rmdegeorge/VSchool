function alternatingSums(a) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < a.length; i++) {
    (i%2 === 0) ? sum1 += a[i] : sum2 += a[i]
  }
  return [sum1, sum2];
}

const a = [50, 60, 60, 45, 70];
const b = [100, 50];
const c = [80];
const d = [100, 50, 50, 100];
const e = [100, 51, 50, 100];

console.log(alternatingSums(a));
console.log(alternatingSums(b));
console.log(alternatingSums(c));
console.log(alternatingSums(d));
console.log(alternatingSums(e));

