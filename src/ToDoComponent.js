import './ToDo.css'
import { useState } from 'react'


export const ToDoComponent = () => {

  const [tasks,setTasks] = useState(['Wake Up','Eat BreakFast','Take a Shower']);
  const [newTask,setNewTask] = useState('');

  function addTask(){
    if(newTask.trim().length > 0){
    setTasks([...tasks,newTask]);
    setNewTask("");
    }
  }
  
  return (
    <div className='mainDiv'>
        


      <table>
      <h1> To-Do-List</h1>
      <tr>
        <div>
          <input type='text' className="tasktextbox" placeholder='Enter Task Name' value= {newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button onClick={addTask} className= "submitButton"  >  submit </button>
        </div>
        </tr>

        <div >
        
          {tasks.map((task,index)  =>

            <tr key= {index}>
              <div className='taskList'>
                <input type = "checkbox"/>
                <span >{task}</span>
                </div>
            </tr>
          )}
          </div>
       </table>
    </div>
  )
}
