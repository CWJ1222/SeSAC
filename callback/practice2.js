// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

//콜백함수 실행
// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//       console.log(txt + '를 실행했구나');
//       hell(function (msg) {
//         console.log('여기는' + msg);
//       });
//     });
// });

function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업이 성공적으로 완료되면 resolve 호출
    }, 1000);
  });
}

function backPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back'); // 작업이 성공적으로 완료되면 resolve 호출
    }, 1000);
  });
}

function hellPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell'); // 작업이 성공적으로 완료되면 resolve 호출
    }, 1000);
  });
}

// Promise 체인 실행

// callPromise('kim')
//   .then((name) => {
//     console.log(`${name} 반가워`);
//     return backPromise();
//   })
//   .then((txt) => {
//     console.log(`${txt}를 실행했구나`);
//     return hellPromise();
//   })
//   .then((msg) => {
//     console.log(`여기는 ${msg}`);
//   })
//   .catch((err) => {
//     console.error(err); // 에러 처리
//   });
//then은 return을 받아와서 처리한다.

async function run() {
  try {
    const name = await callPromise('kim');
    console.log(`${name} 반가워`);

    const txt = await backPromise();
    console.log(`${txt}를 실행했구나`);

    const msg = await hellPromise();
    console.log(`여기는 ${msg}`);
  } catch (err) {
    console.error(err); // 에러 처리
  }
}

run();
