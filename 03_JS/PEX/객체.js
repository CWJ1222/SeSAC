const superman = {
  name: 'clark',
  age: 30,
};

console.log(superman.name);
console.log(superman['age']);

console.log(superman);
superman.hair = 'black';
superman['eye'] = 'brown';
console.log(superman);

delete superman.age;
console.log(superman);

function makeObject(name, age) {
  return {
    // name: name,
    // age: age,
    name,
    age,
    hobby: 'football',
  };
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);

function isAdult(user) {
  if (!('age' in user) || user.age < 20) {
    return false;
  } else {
    return true;
  }
}
// age가 없는 경우도 가만해야 함.

const Mike1 = {
  name: 'Mike1',
  age: 30,
};

const Jane = {
  name: 'Jane',
};

console.log(isAdult(Mike1));
console.log(isAdult(Jane));

const Mike2 = {
  name: 'Mike2',
  age: 30,
};

for (a in Mike2) {
  console.log(a);
  console.log(Mike2[a]);
}
//a자리에는 뭐가 와도 관계없음
