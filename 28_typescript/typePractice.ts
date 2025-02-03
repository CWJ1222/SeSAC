function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(3, 5);
// ----------
console.log("------------------");

function sum11(a: number, b: number): number {
  return a + b;
}
console.log(sum11(3, 5));

//-----------------
console.log("------------------");

function sum2(...numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//----------------
console.log("------------------");

const numbers = [10, 20, 30, 40];
const strings = ["apple", "banana", "cherry"];
const mixedd = [1, "two", true, null];

function arrElement<T>(arr: T[], index: number): T | false {
  if (index < 0 || index > arrElement.length) {
    return false;
  }
  return arr[index];
}

console.log(arrElement(numbers, 1));
console.log(arrElement(mixedd, 10));
console.log(arrElement(strings, 0));
console.log(arrElement(strings, 2));
//----------------
console.log("------------------");

const tuple1: [{ name: string; age: number }, boolean] = [
  { name: "John", age: 30 },
  true,
];

const tuple2: readonly [{ id: number; active: boolean }, boolean] = [
  { id: 222, active: false },
  false,
];

console.log("🚀 ~ tuple1:", tuple1);
console.log("🚀 ~ tuple2:", tuple2);

tuple1[1] = false;
console.log("🚀 ~ tuple1:", tuple1);

// tuple2[1] = true; readonly라서 수정불가

//----------------
console.log("------------------");

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log("🚀 ~ heroGame_A:", heroGame_A);
console.log("🚀 ~ heroGame_B:", heroGame_B);
