let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    console.log(i);
    sum = sum + i;
  }
}
console.log(sum);
