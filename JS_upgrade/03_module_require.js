const module1 = require('./03_module01');
console.log('🚀 ~ module1:', module1);

//원하는 부분만 가져오기, 객체 구조분해할당
const { colors } = require('./03_module01');
console.log('🚀 ~ colors:', colors);

//가져오는 방식은 같음
const module2 = require('./03_module02');
console.log('🚀 ~ module2:', module2);

const { name, sayHi } = require('./03_module02');
console.log('🚀 ~ name:', name);
sayHi();
