import React, { Component } from 'react'
import Notifications from './Notifications'
import TaskList from '../task/TaskList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
  render(){
    const {tasks, auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (auth.uid) 
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TaskList tasks={tasks}/>
            </div>
          <div className="col s12 m5 offset-m1"></div>
            <Notifications />
          
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'tasks'}
  ])
)(Dashboard)
