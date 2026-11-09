import { useState } from "react"

function ToDo() {

    const [tasks, setTask] = useState([]);
    const [tasksMsg, setTaskMsg] = useState();

    function handleAddTask() {
        const newTask = { taskMessage: tasksMsg }

        setTask(t => [...t, newTask]);

        setTaskMsg("");
    }

    function handleDeleteTask(index) {
        setTask(tasks.filter((_, i) => index !== i))
    }

    function handleTaskChange(event) {
        setTaskMsg(event.target.value);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]]
            setTask(updateTask)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
            setTask(updateTask)
        }
    }

    return (
        <>
            <div className="box-border min-h-dvh w-full flex justify-center items-center bg-[radial-gradient(circle_at_top,#dcfce7,#f8fafc_45%,#eef2ff)] font-Kanit px-4 py-10">
                
                <div className="w-full max-w-5xl bg-white rounded-[30px] border border-slate-200 shadow-[0px_20px_70px_rgba(15,23,42,0.12)]">
                    <div className="bg-gradient-to-br from-[#103b2a] via-[#145b3d] to-[#18834f] px-8 py-9 sm:px-12 rounded-tl-[30px] rounded-tr-[30px]">
                        <p className="text-emerald-200 text-sm tracking-[0.25em] font-medium mb-3">PERSONAL PRODUCTIVITY</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">My To-Do List</h1>
                        <p className="text-emerald-100 mt-3 text-lg">Organize your day, one task at a time.</p>
                    <div className="mt-6 w-16 h-1 rounded-full bg-lime-300"></div>
                </div>

                    <div className="px-6 py-8 sm:px-10">
                        
                        <div className="flex flex-col sm:flex-row gap-3 mb-10">
                            <input onChange={handleTaskChange} value={tasksMsg ?? ""} id="task-input" type="text" placeholder="What needs to be done?" className="flex-1 min-w-0 px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-lg text-slate-800 placeholder:text-slate-400 transition-all duration-300 ease-in-out focus:border-[#16a34a] focus:ring-4 focus:ring-emerald-100 focus:outline-none" />
                            <button onClick={handleAddTask} className="shrink-0 flex items-center justify-center gap-2 px-8 py-4 bg-[#16a34a] text-white text-lg font-medium rounded-2xl shadow-lg shadow-emerald-200 cursor-pointer transition-all duration-200 hover:bg-[#15803d] hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                                <span className="text-2xl leading-none">+</span>
                                Add Task
                            </button>
                        </div>

                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-800">Your Tasks</h2>
                                <p className="text-slate-400 text-sm mt-1">Keep track of what you need to accomplish.</p>
                            </div>
                            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-sm font-medium">My List</div>
                        </div>
                        
                        <div className="max-h-[40vh] overflow-y-auto pr-2">
                            <ul className="space-y-3">
                                {tasks.map((task, index) =>
                                    <li key={index} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-4 rounded-2xl transition-all duration-200 hover:bg-white hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5">
                                        <p className="min-w-0 break-words text-slate-700 text-lg">{task.taskMessage}</p>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button className="bg-red-50 text-red-500 px-3 py-2 rounded-xl border border-red-100 cursor-pointer transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" onClick={() => handleDeleteTask(index)}>
                                                Delete
                                            </button>
                                            <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl cursor-pointer transition-all duration-200 hover:bg-emerald-100 hover:border-emerald-300 active:scale-90 focus-visible:outline-2 focus-visible:outline-emerald-500" onClick={() => moveTaskUp(index)} title="Move task up" aria-label="Move task up">
                                                ☝️
                                            </button>
                                            <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl cursor-pointer transition-all duration-200 hover:bg-emerald-100 hover:border-emerald-300 active:scale-90 focus-visible:outline-2 focus-visible:outline-emerald-500" onClick={() => moveTaskDown(index)} title="Move task down" aria-label="Move task down">
                                                👇
                                            </button>
                                        </div>
                                    </li>
                                )}
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToDo