function tsPrint(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint(1, 2, 3);
console.log("----");
tsPrint(1, 2);
// tsPrint(1, 2, 3, 4); // err

function tsPrint2(a: number, b: number, c = 5) {
  console.log("print2!");
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2);

function concatStr(a: string, b: number): string {
  return a + b;
}

function circleArea(r: number): number {
  return r * r * Math.PI;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

// return 키워드 없는 리턴
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

// 함수 호출!
console.log("원의 넓이", circleArea(5));
console.log("사각형넓이 " + squareArea(3, 4));
console.log(`삼각형 넓이 ${triangleArea("5", "6")}`);

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}
// goingOn(); // 끝나지 않는 함수
