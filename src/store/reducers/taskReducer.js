const initState = {
    tasks: [
        {id: '1', title: 'Umyj naczynia', content: 'bo zabije'},
        {id: '2', title: 'Umyj meble', content: 'bo zabije'},
        {id: '3', title: 'Umyj auto', content: 'bo zabije'}
    ]
}
const taskReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_TASK':
            console.log('created task', action.task);
            return state;
        case 'CREATE_TASK_ERROR':
            console.log('created task error', action.err);
            return state;
        default:
            return state;
    }
    
}

export default taskReducer