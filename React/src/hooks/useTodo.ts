import { deleteTodo } from "../apis/deleteTodo";
import { patchTodo } from "../apis/patchTodo";
import { TodoType } from "../types/todo";

interface TodoProps {
  item: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function useTodo({item, setTodos}: TodoProps) {
  const handleUpdate = () => {
    patchTodo(item.id, item.content, !item.completed);
    setTodos(prev => prev.map(todo => todo.id === item.id ? {...todo, completed: !todo.completed} : todo))
  };

  const handleDelete = () => {
    deleteTodo(item.id);
    setTodos(prev => prev.filter(todo => todo.id !== item.id));
  }

  return { handleUpdate, handleDelete };
}