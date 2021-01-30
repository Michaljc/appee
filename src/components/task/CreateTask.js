import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createTask} from '../../store/actions/taskActions'
import { Redirect } from 'react-router-dom'

export class CreateTask extends Component {
    state = {
        title: '',
        content: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state)
        this.props.history.push('/')
        
    }
    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create task</h5>
                    <div className="input=field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input=field">
                        <label htmlFor="content">TaskContent</label>
                        <textarea id="content" cols="20" rows="7" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateTask)
