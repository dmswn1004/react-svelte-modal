import "../styles/todoItem.css";
import { TodoType } from "../types/todo";
import Button from "../commons/Button";
import Modal from "../commons/Modal";
import useModal from "../hooks/useModal";
import useTodo from "../hooks/useTodo";

interface TodoItemProps {
  item: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoItem({item, setTodos}: TodoItemProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const { handleUpdate, handleDelete } = useTodo({item, setTodos});

  return (
    <div className="todo-container">
      <label>
        <input type="checkbox" checked={item.completed} onChange={handleUpdate}/>
        <span>{item.content}</span> 
      </label>

      <Button onClick={openModal} color="destructive">삭제</Button>

      {isOpen && <Modal content="할 일을 삭제하시겠습니까?" closeModal={closeModal} onConfirm={handleDelete} />}
    </div>
  )
}