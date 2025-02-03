//	•	나머지 요소 모으기: ... 연산자를 사용해 나머지 요소들을 배열로 모을 수 있습니다.
console.log('-------------------------------');

let obj = { name: 'Alice', age: 25 };
let { name, age } = obj;

console.log(name); // "Alice"
console.log(age); // 25

console.log('-------------------------------');
function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log('-------------------------------');
function introduce(name, age, ...hobbies) {
  console.log(`이름: ${name}`);
  console.log(`나이: ${age}`);
  console.log(`취미: ${hobbies.join(',')}`);
}

introduce('Alice', 25, '독서', '음악', '요리');
// 이름: Alice
// 나이: 25
// 취미: 독서, 음악, 요리
console.log('-----------------)))--------------');

function add55(...numberss) {
  let result = 0;
  numberss.forEach((num) => (result = result + num));
  console.log(result);
}

add55(1, 2);
add55(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function add1(...numberss) {
  let result = numberss.reduce((a, b) => a + b);
  console.log(result);
}

add1(3, 5);
console.log('-------------------------------');
console.log('-------------------------------');

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');
console.log('🚀 ~ user1:', user1);
console.log('🚀 ~ user2:', user2);
console.log('🚀 ~ user3:', user3);

console.log('-------------------------------');
//전개구문
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6] 배열결합
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
//배열복사

//객체병합
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { age: 30, city: 'Seoul' };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { name: "Alice", age: 30, city: "Seoul" }

//위 예제에서 obj1과 obj2의 속성들이 결합되어 merged 객체가 생성되었습니다.
//같은 이름의 속성이 있다면, 마지막에 사용된 객체의 값이 우선합니다.

//객체복사
const original1 = { name: 'Alice', age: 25 };
const copy1 = { ...original1 };

copy1.age = 30;

console.log(original1); // { name: "Alice", age: 25 }
console.log(copy1); // { name: "Alice", age: 30 }

//예제 5: 함수 호출 시 전개 구문 사용
function add(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // 6
