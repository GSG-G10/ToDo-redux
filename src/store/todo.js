
const initialState = { data: [], taskDone: []}

const todo = (state = initialState, action) =>{
  switch (action.type) {
    case 'TODO': return {
             ...state,
              data: [...state.data, action.payload]
          } 

    case 'RM': return {
        ...state,
        data: state.data.filter((i) => i.id !== action.payload)
    }

    case 'EDIT': return {
      ...state,
      data: state.data.map(el => el.id === action.payload.id 
          ?  { ...el, task: action.payload.edit} : el 
        )
    }

    case 'DONE': return {
        ...state,
        taskDone: [...state.taskDone,
          state.data.filter((i) => i.id === action.payload)
        ],
        data: state.data.filter((i) => i.id !== action.payload)
    }

    default: return state
  }
}

export default todo