import Todonmae from "./assets/component/Todo-name"
import Todoitem from "./assets/component/Todoitem"

import Todocontainer from "./Todocontainer"
import './App.css'
function App() {
  let todoitemlist=[
    {
      name:"Buy milk",
      date:'2024/04/05'
    },
    {
      name:"go to school",
      date:"2024/04/06"
    },
    {
      name:"go to bank for money",
      date:"2024/04/07"
    }
  ]
  return (
<center className="todo-contianer">
  <Todonmae></Todonmae>
  <Todoitem></Todoitem>
  <Todocontainer todoitemlist={todoitemlist}></Todocontainer>
</center>
  
  )
}

export default App
