import './styles/App.css'
import TodoItem from './components/TodoItem'
import NewTodo from './components/NewTodo'

const item = [
  {id: 1, content: '타입스크립트 배우기', completed: false},
  {id: 2, content: '타입스크립트와 리액트 함께 사용하기', completed: false},
  {id: 3, content: '투두리스트 만들기', completed: false},
]
 
export default function App() {
  return (
    <div>
      <h1>TODO App</h1>

      <div className="container">
        {item.map((item) => <TodoItem key={item.id} item={item} />)}
      </div>

      <NewTodo />
    </div>
  )
}
