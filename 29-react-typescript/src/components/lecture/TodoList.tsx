import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/interface";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]); // 완료된 항목 저장
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null); // 입력 필드 참조

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue(""); // 입력 필드 초기화
    inputRef.current?.focus(); // 입력 필드에 포커스
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const markAsDone = (id: number) => {
    const todoToMark = todos.find((todo) => todo.id === id);
    if (todoToMark) {
      todoToMark.completed = true; // 완료 상태 변경
      setDoneList([...doneList, todoToMark]); // doneList로 이동
      setTodos(todos.filter((todo) => todo.id !== id)); // todos에서 제거
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setDoneList(doneList.filter((todo) => todo.id !== id)); // doneList에서도 삭제
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2>Todo List</h2>
      <div>
        <input
          ref={inputRef} // 입력 필드 참조
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // 엔터 키 입력 처리
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <h3>할 일 목록</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onMarkAsDone={markAsDone}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      <h3>완료된 목록</h3>
      <ul>
        {doneList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onMarkAsDone={() => {}} // 완료된 항목은 더 이상 완료로 이동하지 않음
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
