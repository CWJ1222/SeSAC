let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log('🚀 ~ arr:', arr);

arr.splice(1, 2, 100, 200);
console.log('🚀 ~ arr:', arr);

let t = arr.slice(0, 2);
console.log('🚀 ~ t:', t);
console.log('🚀 ~ arr:', arr);

arr = arr.concat([3, 4, 5], [6, 7, 8]);
console.log('🚀 ~ arr:', arr);

console.log('------------------------------');
let users = ['Mike', 'Jane', 'Tom'];
users.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
console.log('------------------------------');
let numbers = [5, 12, 8, 130, 44];

// 10보다 큰 첫 번째 요소 찾기
let found = numbers.find((element) => element > 10);

console.log(found); // 12

let users1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Bob' },
];

// 이름이 'Bob'인 객체 찾기
let user11 = users1.find((user) => user.name === 'Bob');
let user12 = users1.find((user) => user.name === 'Cha');

console.log(user11); // { id: 2, name: 'Bob' }
console.log('🚀 ~ user12:', user12);

console.log('------------------------------');
console.log('------------------------------');
let numbers1 = [5, 12, 8, 130, 44];

// 10보다 큰 모든 요소 찾기
let filteredNumbers = numbers.filter((element) => element > 10);

console.log(filteredNumbers); // [12, 130, 44]

let users13 = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

// 활성화된 사용자만 찾기
let activeUsers = users13.filter((user) => user.active);

console.log(activeUsers);
// [
//   { id: 1, name: 'Alice', active: true },
//   { id: 3, name: 'Charlie', active: true }
// ]
console.log('------------------------------');
console.log('------------------------------');
let numbers14 = [1, 2, 3, 4, 5];

// 각 요소를 두 배로 변환
let doubled = numbers14.map((element) => element * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

let users15 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// 각 사용자의 이름만 추출
let names = users15.map((user) => user.name);

console.log(names); // ["Alice", "Bob", "Charlie"]
//---------------------------------
let products = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'cherry', price: 300 },
];

// 가격에 세금(10%)을 추가한 가격 배열 만들기
let updatedPrices = products.map((product) => ({
  name: product.name,
  price: product.price * 1.1,
}));

console.log(updatedPrices);
// [
//   { name: 'apple', price: 110 },
//   { name: 'banana', price: 220 },
//   { name: 'cherry', price: 330 }
// ]

console.log('------------------------------');
console.log('------------------------------');
let path = ['home', 'user', 'documents', 'file.txt'];

// 슬래시(/)로 연결하여 경로 생성
let filePath = path.join('/');

console.log(filePath); // "home/user/documents/file.txt"

console.log('------------------------------');
console.log('------------------------------');
let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();

console.log(fruits); // ["apple", "banana", "cherry"]
let numbers111 = [40, 1, 5, 200];
numbers111.sort();

console.log(numbers111); // [1, 200, 40, 5]

let numbers15 = [40, 1, 5, 200];
let numbers16 = numbers15.sort();
console.log('🚀 ~ numbers16:', numbers16);
numbers15.sort((a, b) => a - b);
//인수를 전달하지 않으면 1, 200, 40, 5 이런식으로 뒤죽박죽됨

console.log(numbers15); // [1, 5, 40, 200]

let users11 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

// 나이를 기준으로 오름차순 정렬
users11.sort((a, b) => a.age - b.age);

console.log(users11);
// [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]
console.log('------------------------------');
let numbers44 = [1, 2, 3, 4, 5];

// 배열 요소의 합계를 구함
let sum = numbers44.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//이 예제에서 reduce()는 배열의 모든 요소를 더하여 15를 반환합니다.
//0은 accumulator의 초기값으로 사용됩니다.
console.log(sum); // 15

let items = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'cherry', price: 150 },
];

// 가격의 총합을 계산
let totalCost = items.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(totalCost); // 450
//----------------------
let numbers5 = [5, 12, 8, 130, 44];

// 배열의 최대값을 찾기
let max = numbers5.reduce((accumulator, currentValue) =>
  Math.max(accumulator, currentValue)
);

console.log(max); // 130

let words = ['Hello', 'World', 'JavaScript'];

// 배열 요소를 공백으로 구분해 연결
let sentence = words.reduce((accumulator, word) => accumulator + ' ' + word);

console.log(sentence); // "Hello World JavaScript"
