import { useForm } from "react-hook-form";

export default function FormPractice() {
  const {
    register, // input 의 변경 감지
    handleSubmit, // form 의 submit 이벤트 발생시 호출
    watch, // 특정 필드의 값을 실시간 관찰
    formState: { errors },
  } = useForm();

  // console.log("errors", errors);

  const onValid = (data) => {
    console.log("유효한 데이터", data);
  };

  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
  };

  return (
    <form
      style={{ border: "1px solid salmon" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          required: "이름은 필수항목입니다.",
          // minLength: {
          //   message: "이름은 최소 두글자 이상으로 입력해주세요.",
          //   value: 2,
          // },
        })}
      />

      {errors.username?.message}

      <br />

      <input
        type="text"
        placeholder="age"
        {...register("age", {
          // required: "Put the age!!",
          validate: {
            checkAge: (value) => {
              return value >= 0 || "나이는 0 이상이어야 합니다.";
            },
          },
        })}
      />

      {errors.age?.message}

      <br />

      <button type="submit">submit</button>
    </form>
  );
}
