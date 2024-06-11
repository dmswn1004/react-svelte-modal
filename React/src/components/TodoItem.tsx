import "../styles/todoItem.css";
import Button from "../commons/Button";
import { TodoType } from "../types/todo";
import Modal from "../commons/Modal";
import { deleteTodo } from "../apis/deleteTodo";
import useModal from "../hooks/useModal";

interface TodoItemProps {
  item: TodoType;
}

export default function TodoItem({item}: TodoItemProps) {
  const { isOpen, openModal, closeModal } = useModal();

  const handleDelete = () => {
    deleteTodo(item.id);
    window.location.reload();
  }

  return (
    <div className="todo-container">
      <label>
        <input type="checkbox" checked={item.completed} onChange={() => {}}/>
        <span>{item.content}</span> 
      </label>

      <div className="btn-container">
        <Button onClick={() => {}} color="secondary">수정</Button>
        <Button onClick={openModal} color="destructive">삭제</Button>
      </div>


      {isOpen && <Modal content="할 일을 삭제하시겠습니까?" closeModal={closeModal} onConfirm={handleDelete} />}
    </div>
  )
}