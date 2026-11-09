import { useState } from "react"

function ToDo() {

    const [tasks, setTask] = useState([]);
    const [tasksMsg, setTaskMsg] = useState();

    function handleAddTask() {
        const newTask = { taskMessage: tasksMsg }

        setTask(t => [...tasks, newTask]);

        setTaskMsg("");
    }

    function handleDeleteTask(index) {
        setTask(tasks.filter((_,i) => index !== i))
    }

    function handleTaskChange(event) {
        setTaskMsg(event.target.value);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTask = [...tasks]
            [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]]
            setTask(updateTask)
        }
    }

    return (
        <>
            <div className="flex min-h-screen font-Kanit justify-center items-center">
                <div className="w-250 h-150 shadow-[10px_5px_50px_1px_rgba(170,170,170,0.3)] relative overflow-y-auto">
                    <h1 className="text-center text-5xl">To-Do List</h1>

                    {/* Text Field */}
                    <div className="flex absolute left-80">
                        <input onChange={handleTaskChange} id="task-input" type="text" placeholder="Enter a task..." className="w-70 px-3 mr-3  border border-gray-300 rounded-2xl text-xl font-Kanit transition-all duration-300 ease-in-out hover:ring-3 hover:ring-[#61e37fcc] focus:outline-none" />
                        <button onClick={handleAddTask} className="py-1.5 px-6 font-Kanit text-lg cursor-pointer rounded-2xl border-none hover:bg-[#0f934d] hover:text-[white]">Add</button>
                    </div>

                    <div className="mt-20 relative">
                        <div className=" absolute left-70">
                            <ul className="">
                                {tasks.map((task, index) =>

                                    <div key={index} className="flex bg-[#d0cbcb] text-[black] mt-5 rounded-xl">
                                        <p key={index} className="w-90 p-1 ml-4">
                                            {task.taskMessage}
                                            <button className="bg-[#e86a6a] text-[white] ml-30 p-2 rounded-lg border-none shadow-xl shadow-[#ada5ad] cursor-pointer transition-all duration-95 ease-in-out hover:bg-[#bb0f0f] hover:text-white active:scale-95 active:ring-3 active:ring-white focus:outline-none" onClick={() => handleDeleteTask(index)}>Delete</button>
                                            <button onClick={() => moveTaskUp(index)}>☝️</button>
                                            <button>👇</button>
                                        </p>

                                    </div>

                                )}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p>Task: {tasksMsg}</p>
        </>
    )
}
export default ToDo