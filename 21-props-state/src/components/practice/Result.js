export default function Result(props) {
  const { content, fruit, color, background } = props.data;
  return (
    <div>
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      {/* public 이 / 로 접근 가능함 */}
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: "100px",
          height: "30px",
          textAlign: "center",
          lineheight: "30px",
        }}
      >
        {content}
      </p>
    </div>
  );
}
