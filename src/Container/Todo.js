import React, { useEffect, useState } from 'react'

export const Todo = () => {

    const initalstate = JSON.parse(localStorage.getItem("toDo")) || []
    const [newTask, setNewTask] = useState('')
    const [toDo, setToDo] = useState(initalstate)
    console.log("toDo", toDo);

    useEffect(() => {
     
       localStorage.setItem("toDo" , JSON.stringify(toDo));
    }, [toDo])
    

    const addTask = () => {
        if (newTask) {
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newTask, status: false }
            setToDo([...toDo, newEntry])
            setNewTask('');
        }
    }


    // Delete task 
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id)
        setToDo(newTasks);
    }

    // Mark task as done or completed
    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setToDo(newTask);
    }



    return (
        <>
        <div className="container">
            <h1>TODO LIST APP</h1>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center p-3">
                        <input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="form-control"
                        />
                         <button
                            onClick={addTask}
                            className="btn btn-success"
                        >Add Task</button>
                    </div>
                    <div>
                       
                    </div>
                </div>
                <div className=''>

             
                {toDo && toDo
                    .map((task, index) => {
                        return (
                            <div key={task.id} className="">
                                <div className="col taskBg">
                                    <div className={task.status ? 'done' : ''}>
                                        <span className="taskNumber">{index + 1}</span>
                                        <span className="taskText">{task.title}</span>
                                    </div>
                                    <div className="iconsWrap">
                                        <span title="Completed / Not Completed" onClick={(e) => markDone(task.id)}><i class="fa-solid fa-check"></i></span>

                                        <span title="Delete" onClick={() => deleteTask(task.id)}><i class="fa-solid fa-trash-can"></i></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                   </div>
            </div>
        </>
    )
}


// const [updateData, setUpdateData] = useState('');
    // // Cancel update
    // const cancelUpdate = () => {
    //     setUpdateData('');
    // }

    // // Change task for update
    // const changeTask = (e) => {
    //     let newEntry = {
    //         id: updateData.id,
    //         title: e.target.value,
    //         status: updateData.status ? true : false
    //     }
    //     setUpdateData(newEntry);
    // }

    // // Update task
    // const updateTask = () => {
    //     let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    //     let updatedObject = [...filterRecords, updateData]
    //     setToDo(updatedObject);
    //     setUpdateData('');
    // }


    // {task.status ? null : (
    //     <span title="Edit"
    //         onClick={() => setUpdateData({
    //             id: task.id,
    //             title: task.title,
    //             status: task.status ? true : false
    //         })}
    //     >
    //         <i class="fa-solid fa-pen"></i>
    //     </span>
    // )}


// const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
//     return(
//       <>
//         {/* Update Task */}
//         <div className="row">
//           <div className="col">
//             <input 
//               value={ updateData && updateData.title }
//               onChange={ (e) => changeTask(e)}
//               className="form-control form-control-lg"
//             />
//           </div>
//           <div className="col-auto">
//             <button
//               onClick={updateTask}
//               className="btn btn-lg btn-success mr-20"
//             >Update</button>
//             <button
//               onClick={cancelUpdate}
//               className="btn btn-lg btn-warning"
//             >Cancel</button>
//           </div>
//         </div>
//         <br />  
//       </>
//     )
//   }
  
//   export default UpdateForm;