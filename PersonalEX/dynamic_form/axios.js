async function axiosGet() {
  const form = document.forms['register'];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  // ----- axios 요청 보내기 -----
  // 1. then ~ catch 사용
  /* axios({
          method: "get",
          url: "/axios",
          params: data, // get 요청일 때는 params에 담아서 요청
        })
          .then(function (response) {
            // 통신에 성공했을 때
            console.log(response);
            // {name:'allie', gender:'여성'} 그대로 뜨지 않음
            console.log("--------");
            console.log(response.data); // 서버에서 준 데이터
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            resultBox.textContent = `GET /axios 요청 완료!
          ${response.data.name}의 성별은 ${response.data.gender}`;
            resultBox.style.color = "green";
          })
          .catch(function (err) {
            // 통신에 실패했을 때
            console.error("error!!!!!!!!!");
            console.error(err);
          }); */

  // 2. async ~ await
  // 에러처리를 try ~ catch 문을 사용해서 해주는게 좋다!
  try {
    const response = await axios({
      method: 'get',
      url: `/axios?name=${data.name}&gender=${data.gender}`,
    });
    console.log(response);
    console.log(response.data);
    const { name, gender } = response.data;
    resultBox.textContent = `${name}의 성별은 ${gender}`;
    resultBox.style.color = 'green';
  } catch (err) {
    console.err(err);
  }
}

async function axiosPost() {
  const form = document.forms['register'];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  try {
    const res = await axios({
      method: 'post',
      url: '/axios',
      data: data,
    });
    console.log(res);
    console.log('실제 데이터', res.data);
    const { name: 이름, gender: 성별 } = res.data;
    resultBox.textContent = `POST /axios요청 완료!
        ${이름}의 성별은 ${성별}`;
    resultBox.style.color = 'hotpink';
  } catch (err) {
    console.error(err);
  }
}
