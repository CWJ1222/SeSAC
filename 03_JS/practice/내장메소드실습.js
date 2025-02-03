let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];
let fruits2 = ['사과', '파인애플', '수박', '참외', '오렌지', '망고'];

let same = [];
let diff = [];

for (let a of fruits1) {
  if (fruits2.includes(a)) {
    same.push(a);
  } else diff.push(a);
}

console.log(same);
console.log(diff);

//for로 fruits를 돌리면서 각 원소가 fruits1과 일치하는지
