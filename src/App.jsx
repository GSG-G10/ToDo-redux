import { useSelector , useDispatch} from 'react-redux';
import { addtodo, donetasks, editTask, removeTask } from './store/actions';
import './App.css';
import { useState } from 'react';
import { DeleteOutlineIcon, Done, IconPlus, ModeEdit } from './tool';

function App() {

    const { data, taskDone } = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const [isAdd, setIsAdd] = useState(false)
    const [input, setInput] = useState('')
    const [isEdit, setIsEdit] = useState('')
    const [editValue, setEditValue] = useState('')

    const handleToDO =() =>{
        setInput('')
        dispatch(addtodo(
            {
                id: Date.now(),
                task: input
            }
        ))
    }

    const handleRemove = (id) =>{
        dispatch(removeTask(id))
    }

    const handleEdit = (e, id) =>{
        e.preventDefault()
        dispatch(editTask({
            id: id,
            edit: editValue
        }))
        setIsEdit(false)
    }
    
    const handleDone = (id) =>{
        dispatch(donetasks(id))
    }

  return (
    <div className="App">

    <header >
      {
        isAdd ? 
            <div className="inputNote active">
                <input type="text"
                    className="input" 
                    placeholder="Task.." 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                    />
                <div className="svg2" onClick={handleToDO}>
                    <IconPlus />
                </div>
            </div>
        :
            <div className="card-h " onClick={() => setIsAdd(true)}> 
                <div className="svg">
                    <IconPlus />
                </div>
                <span className="span">Add Task..</span>
            </div>
        }
    
    </header>

    <div className="wrapper_tasks">
        {
            data.map((task, i)=>{
                return (
                    <div className="line_task" key={i}>

                        {isEdit &&  isEdit ===  task.id ?
                            <form
                             onSubmit={(e) => handleEdit(e, task.id)}
                             className='form_edit'
                             > 
                                <input type='text' 
                                    onChange={(e) => setEditValue(e.target.value)} 
                                    defaultValue={task.task} 
                                />
                            </form> 
                            : 
                            <span>{task.task}</span>
                        }

                         <div className="options">
                            <div onClick={() => handleDone(task.id)}>
                                <Done />
                            </div>
                            <div onClick={() => setIsEdit(task.id)}>
                                <ModeEdit />
                            </div>
                            <div onClick={() => handleRemove(task.id)}>
                                <DeleteOutlineIcon />
                            </div>
                         </div>
                    </div>
                )
            })
        }
        </div>

        <div className="wrapper_tasks">
            { taskDone.length > 0 ?  <h2 style={{color: '#FFF'}}>Tasks Done</h2> : null}
            {
                taskDone.map((task, i)=>{
                    return (
                        <div className="line_task" key={i}>
                            <span>{task[0].task}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default App;
