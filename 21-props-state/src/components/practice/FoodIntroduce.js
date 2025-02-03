import React from "react";

export default function FoodIntroduce({
  name = "카레",
  color,
  taste,
  children,
}) {
  return (
    <div>
      <h2>좋아하는 음식은 {name}!!</h2>
      <p>
        색은 {color}이며 맛은 {taste}입니다~
      </p>
      <p>{children}</p>
    </div>
  );
}
