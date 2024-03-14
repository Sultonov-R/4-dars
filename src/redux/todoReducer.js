
const defaultState ={
    todos:[]
}
export function todoReducer(state=defaultState, actions){

    if (actions.type == 'Todo_add') {
        let copied = JSON.parse(JSON.stringify(state.todos))
        copied.push(payload)
        return {
            
            ...state, todos:copied
        }
    } else if(actions.type == 'Todo_remove'){
        let copied = JSON.parse(JSON.stringify(state.todos))
        copied = copied.filter((el)=>{
            return el.id != actions.payload
        })
        return {
            ...state, todos:copied
        }
    } else {
        return state;
    }
}