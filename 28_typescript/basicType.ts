// 기본 타입 (Primitive Types)
const myString: string = "Hello, TypeScript!";
const myNumber: number = 42;
const myBoolean: boolean = true;
const myUndefined: undefined = undefined;
const myNull: null = null;

// 배열 (Arrays)
const myStringArray: string[] = ["apple", "banana", "cherry"];
const myNumberArray: Array<number> = [1, 2, 3, 4, 5];

// 튜플 (Tuples)
const myTuple: [string, number, boolean] = ["TypeScript", 2023, true];

// 객체 (Objects)
const myObject: { name: string; age: number; isStudent: boolean } = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};

// 열거형 (Enums)
enum Color {
  Red,
  Green,
  Blue,
}
const myColor: Color = Color.Green;

// 함수 (Functions)
function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(10, 20);

// 함수 타입 (Function Types)
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;
const multiplicationResult = multiply(5, 4);

// 유니언 타입 (Union Types)
let mixed: string | number;
mixed = "Hello";
mixed = 123;

// 인터섹션 타입 (Intersection Types)
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };

const myEmployee: Person & Employee = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};

// any 타입
let anything: any = "I can be anything!";
anything = 42;
anything = true;

// unknown 타입
let unknownValue: unknown = "Could be anything";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// 타입 단언 (Type Assertions)
const someValue: unknown = "This is a string";
const stringLength: number = (someValue as string).length;

// void 타입 (Functions with no return value)
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("Alice");

// never 타입 (Functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

// 제네릭 (Generics)
function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(123);
const stringIdentity = identity<string>("Hello");

// 인터페이스 (Interfaces)
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.sound();

// 타입 선언 (Type Aliases)
type ID = string | number;

const userId: ID = 12345;
const productId: ID = "abc-123";

console.log({
  myString,
  myNumber,
  myBoolean,
  myUndefined,
  myNull,
  myStringArray,
  myNumberArray,
  myTuple,
  myObject,
  myColor,
  result,
  multiplicationResult,
  mixed,
  myEmployee,
  anything,
  stringLength,
  numberIdentity,
  stringIdentity,
  userId,
  productId,
});
