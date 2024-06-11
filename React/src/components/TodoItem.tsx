import "../styles/todoItem.css";
import Button from "../commons/Button";
import { TodoType } from "../types/todo";

interface TodoItemProps {
  item: TodoType;
}

export default function TodoItem({item}: TodoItemProps) {
  return (
    <div className="todo-container">
      <label>
        <input type="checkbox" checked={item.completed} onChange={() => {}}/>
        <span>{item.content}</span> 
      </label>

      <div className="btn-container">
        <Button onClick={() => {}} color="secondary">수정</Button>
        <Button onClick={() => {}} color="destructive">삭제</Button>
      </div>
    </div>
  )
}