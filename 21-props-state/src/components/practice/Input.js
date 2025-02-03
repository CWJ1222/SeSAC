export default function Input({ setData }) {
  // console.log(setData);
  const handleChange = (e) => {
    // {
    //   fruit: "apple",
    //   background: "palegreen",
    //   color: "gray",
    //   content: "text",
    // }
    // console.log("target", e.target);
    // console.log("currentTarget", e.currentTarget);

    setData((prevState) => {
      return {
        ...prevState,
        content: e.target.value,
      };
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
