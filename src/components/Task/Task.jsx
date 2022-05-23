import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isTrue,setIsTrue] = useState(false)
  
const handleClick =()=>{
setIsTrue(!isTrue)
console.log(isTrue)
}

const deleteClick=(id)=>{
console.log(id)
}

  return (
    <>
        {props.todos.map((elem)=>(
          <li  data-cy="task" className={styles.task} key={elem.id}>
      <input type="checkbox" style={elem.isCheck ? "line" : null }  data-cy="task-checkbox" onClick={handleClick} />
      <div data-cy="task-text">
      
        <div >{elem.value}</div>
      </div>
      {/* Counter here */}
      <Counter/>
      <button className={styles.deleteBtn} onClick={deleteClick(elem.id)} data-cy="task-remove-button">X</button>
    </li>
      ))}
      </>
  );
};

export default Task;
