import "../styles/newTodo.css";
import { useState } from "react"
import Button from "../commons/Button"

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState<string>("")

  const handleAddNewTodo = () => {
    setNewTodo("")
  }

  return (
    <div className="new-container">
      <input className="new-todo-input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="새로운 할 일을 입력하세요."/>
      <Button onClick={handleAddNewTodo} color="primary">추가</Button>
    </div> 
  )
}  