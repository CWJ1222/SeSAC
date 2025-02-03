import React, { useReducer, useState } from "react";

// Reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    // 새로운 Todo 추가
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    // Todo 완료 상태 토글
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Todo 삭제
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []); // useReducer 초기화
  const [input, setInput] = useState(""); // 입력 값 상태 관리

  // Todo 추가 핸들러
  const addTodo = () => {
    if (input.trim() === "") return; // 빈 입력은 무시
    dispatch({ type: "ADD_TODO", payload: input });
    setInput(""); // 입력 값 초기화
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "200px",
        }}
      />
      <button onClick={addTodo} style={{ padding: "10px 20px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
