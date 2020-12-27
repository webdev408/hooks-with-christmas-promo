import React, { useState } from 'react'

function Tasks() {
    const [newTasks, setNewTasks] = useState('')
    const [tasks, setTasks] = useState([])

    function addTask() {
        setTasks([...tasks, newTasks])
    }

    function deleteTask(index) {
        var duplicateArray = [...tasks]
        duplicateArray.splice(index, 1)
        setTasks(duplicateArray);
    }

    const taskList = tasks.map((object, index) => {
        return <div className='row justify-content-center'>
        <h1 className='col-md-6 text-left'>{index+1} {object}</h1>
        <button onClick={() =>{deleteTask(index)}} className='col-md-2 btn btn-danger m-1'>Delete</button>
        </div>
    })

    return (
        <div className='App container'>
            <h1 className='my-4'>My Weekday Tasks</h1>
            <div className="row justify-content-center">
            <input type="text" className='form-control col-md-6 m-1'placeholder='taskName' value={newTasks} 
            onChange={(e) => setNewTasks(e.target.value)}/>
            <button onClick={addTask} className='btn btn-success col-md-2 m-1'>ADD A Task</button>
        </div>
            {taskList}
        </div>
    )
}

export default Tasks;
