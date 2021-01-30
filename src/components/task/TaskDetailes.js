import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'

const TaskDetailes = (props) => {
    const id = props.match.params.id;
    const {task, auth} = props;
    if (!auth.uid) return <Redirect to='/signin' />;
    if (task){
        return(
        <div className="container section task-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">{task.title}</span>
                <p>{task.content}</p>
            </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div> Written by {task.authorFirstName} {task.authorLastName}</div>
                    <div> 27.01 </div>
                </div>    
            </div>
        </div>
        )
    }else{
        return (
            <div className="container centre">
            <p>Loading project....</p>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const tasks = state.firestore.data.tasks;
    const task = tasks ? tasks[id] : null
    return{
        task: task,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'tasks'}
    ])
)(TaskDetailes)