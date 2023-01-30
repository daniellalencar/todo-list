import { useState } from 'react'
import todoLogo from './assets/todo-do.svg'
import  './global.css'
import './App.css'
import {TodoList} from "./components/TodoList";

function App() {
    const [count, setCount] = useState(0)
    const [atividade, setAtividade] = useState("")


  function handleClickAddActivity(){

  }

  return (
    <div className="App">
        <header>
            <img src={todoLogo}></img>
        </header>
        <div className="wrapper"/>
        <main>
            <TodoList/>
        </main>
        <footer></footer>
    </div>
  )
}

export default App
