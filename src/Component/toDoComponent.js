
import React, { useState } from 'react';


function ToDoListComponent() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [error, setError] = useState("")
    const [taskListHeading, setTaskListHeading] = useState("No Task");


    const HandleTaskChange = (e) => {

        setTask(e.target.value);
    }
    const HandleTaskClick = () => {
        if (task === '') {
            setError("Task cannot be empty")
        }
        else {
            setError(false);
            setTaskList([...taskList, task]);
            setTask("");
            setTaskListHeading("Task List");
        }
    }
    const HandleDeleteTask = (i) => {
        const updatedListData = taskList.filter((elem, id) => {
            return i != id;
        })
        setTaskList(updatedListData);
        if (taskList.length<=1){
            setTaskListHeading("No Task");
        }
    }
const ClearTaskList = () => {
    setTaskList([]); 
    setTaskListHeading("No Task");
}


    return (
        <>
            <div className="container-fluid">
                <div>
                    <input className="form-control w-100 d-inline p-2 mt-4" type="text" onChange={HandleTaskChange} placeholder='Add Task' value={task} />
                    <p className="text-danger">{error}</p>
                    <button className="btn btn-primary w-25 mt- bi-plus-circle" onClick={HandleTaskClick}>Add</button>
                </div>
                <div>
                    <p className=" mt-4"></p>
                    
                    <h6>{taskListHeading} </h6>
                    {
                        taskList != [] &&
                        taskList.map((task, i) => {
                            return (
                                <>
                                    <div key={i}>
                                        <div className="list-group-item p-2 w-75 d-inline-block mt-1 list-group-item-primary">{task}</div>
                                        <button className="btn btn-sm btn-danger mx-2 bi-trash" onClick={() => HandleDeleteTask(i)}></button>
                                    </div>
                                </>

                            )
                        })
                    }

                </div> <footer>
                {taskList.length >=1 && <button className="btn btn-danger btn-sm bi-trash" onClick={ClearTaskList}>Clear List</button>}
                </footer>
            </div>

        </>
    )
}

export default ToDoListComponent
