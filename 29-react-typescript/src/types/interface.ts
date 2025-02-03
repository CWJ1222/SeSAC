// Todo 관련 인터페이스
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// TodoItem 컴포넌트의 Props
export interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onMarkAsDone: (id: number) => void; // 완료 상태로 변경
  onDelete: (id: number) => void; // 삭제
}
