import { useState } from "react"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";





function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Food Shoppoing',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Metting At School',
        day: 'Feb 5th at 3:30pm',
        reminder: true,
    },
  
  ])


//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}


//Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id  !== id))
  }

//toggleReminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
  )
}


  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     { showAddTask &&
     <AddTask onAdd={addTask} />
     }
     {tasks.length > 0 ?
     <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
     : ('there is no task')
     }  
    </div>
  );
}

export default App;
