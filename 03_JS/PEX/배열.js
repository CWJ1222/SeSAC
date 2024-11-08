let days = ['mon', 'tue', 'wed'];

console.log(days);

days[1] = '화';

console.log(days);
console.log(days.length);

days.push('thu');
console.log(days);

days.unshift('sun');
console.log(days);

days.shift();
console.log(days);

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
console.log('------------------');

for (let a of days) {
  console.log(a);
}
