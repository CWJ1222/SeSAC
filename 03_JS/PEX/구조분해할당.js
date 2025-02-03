let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log('🚀 ~ user1:', user1);
console.log('🚀 ~ user2:', user2);
console.log('🚀 ~ user3:', user3);
//------------------------------------------
console.log('-------------------------------');

let arr = [1];
let [a, b = 2] = arr;

console.log(a); // 1
console.log(b); // 2 (기본값)
//	•	기본값 지정: 값이 없을 때 기본값을 지정할 수 있습니다.
console.log('-------------------------------');

let arr1 = [1, 2, 3, 4];
let [a1, ...rest] = arr1;

console.log(a1); // 1
console.log(rest); // [2, 3, 4]
//	•	나머지 요소 모으기: ... 연산자를 사용해 나머지 요소들을 배열로 모을 수 있습니다.
console.log('-------------------------------');

let obj = { name: 'Alice', age: 25 };
let { name, age } = obj;

console.log(name); // "Alice"
console.log(age); // 25
//2. 객체 구조 분해
//객체의 속성들을 변수로 추출하여 할당할 수 있습니다. 객체 구조 분해는 속성 이름을 기준으로
// 값을 할당합니다.
console.log('-------------------------------');

let obj1 = { name1: 'Alice' };
let { name1, age1 = 20 } = obj1;

console.log(name1); // "Alice"
console.log(age1); // 20 (기본값)
console.log('-------------------------------');
//중첩구조분해
let person = {
  name12: 'Alice',
  address: {
    city: 'Seoul',
    zip: '12345',
  },
};

let {
  name12,
  address: { city, zip },
} = person;

console.log(name12); // "Alice"
console.log(city); // "Seoul"
console.log(zip); // "12345"
console.log('-------------------------------');
//함수매개변수
function greet({ name14, age14 }) {
  console.log(`Hello, ${name14}. You are ${age14} years old.`);
}

let user14 = { name14: 'Alice', age14: 25 };
greet(user14); // "Hello, Alice. You are 25 years old."
