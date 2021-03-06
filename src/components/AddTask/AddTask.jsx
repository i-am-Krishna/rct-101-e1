import React,{useState}from "react";
import styles from "./addTask.module.css";
import Tasks from "../Tasks/Tasks";
import {v4 as uuid} from 'uuid'

const AddTask = () => {
  


  const [value,setValue] = useState("")
  const [todos,setTodos] = useState([])
 


const handleChange = (e)=>{
  
  setValue(e.target.value)
  // console.log(todos)

}
const handleClick = ()=>{
  // setTodos(todos)
  setTodos([...todos,{value,
      id: uuid(),
  isCheck:false}]);
  setValue("")
}

 
  return (<div>

    <div className={styles.todoForm}>

      <input data-cy="add-task-input" placeholder="Add task..." type="text" value={value} onChange={handleChange} />

      <button data-cy="add-task-button" disabled={!value} onClick={handleClick}>+</button>
 
    </div>
    <div>
      <Tasks  todos={todos} />
    </div>
  </div>
  );
};

export default AddTask;
