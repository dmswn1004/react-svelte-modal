import './styles/App.css'
import TodoItem from './components/TodoItem'
import NewTodo from './components/NewTodo'
import { useEffect, useState } from 'react'
import { TodoType } from './types/todo'
import { getTodos } from './apis/getTodos'
 
export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await getTodos();
        setTodos(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, [])

  return (
    <div>
      <h1>TODO App</h1>

      <div className="container">
        {todos.length !== 0 ? 
          todos.map((item) => <TodoItem key={item.id} item={item} />) 
          : <p className="no-todo">할 일을 등록해주세요.</p>
        }
      </div>

      <NewTodo />
    </div>
  )
}
