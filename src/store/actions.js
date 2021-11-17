const addtodo = (obj) =>{
  return {
    type: 'TODO',
    payload: obj
  }
}

const removeTask = (id) =>{
  return {
    type: 'RM',
    payload: id
  }
}

const editTask = (obj) =>{
  return {
    type: 'EDIT',
    payload: obj
  }
}

const donetasks = (id) =>{
  return {
    type: 'DONE',
    payload: id
  }
}


export {
  addtodo, removeTask, editTask, donetasks
}