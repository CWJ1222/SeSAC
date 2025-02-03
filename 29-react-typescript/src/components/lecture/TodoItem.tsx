import React from "react";
import { TodoItemProps } from "../../types/interface";

export default function TodoItem({
  id,
  text,
  completed,
  onMarkAsDone,
  onDelete,
}: TodoItemProps) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {text}
      </span>
      {!completed && (
        <button
          onClick={() => onMarkAsDone(id)}
          style={{ marginRight: "10px" }}
        >
          완료
        </button>
      )}
      <button onClick={() => onDelete(id)}>삭제</button>
    </li>
  );
}
