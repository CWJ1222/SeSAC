const name = 'Mike';
const age = 30;

if (name === 'Tom' || age > 19) {
  console.log('pass');
}

if (name === 'Mike' && age > 19) {
  console.log('pass');
}

// const age1 = Number(prompt('age?'));
// const isAge = age1 > 19;
// if (!isAge) {
//   console.log('go away');
// }
console.log('-------------------------------');
const gender = 'M';
const name3 = 'Jane';
const isAdult = true;

if ((gender === 'M' && isAdult) || (name3 === 'Mike' && isAdult)) {
  console.log('pass');
} else {
  console.log('go');
}
