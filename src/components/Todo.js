import React, {Component} from 'react';
import '../Style.css';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

class Todo extends Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.state = {
            tasks: [
                {
                    name: "Task-1",
                    status: false,
                },
                {
                    name: "Task-2",
                    status: false,
                },
                {
                    name: "Task-3",
                    status: false,
                },
            ],
            errorText: '',
        }
        currentTask:'';
    }

    changeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.status = !task.status;
        this.setState({
            tasks: tasks
        })
    }

    updateTask(newValue) {
        this.setState({
            currentTask: newValue.target.value,
        })
    }

    addTask(event) {
        event.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        if (!currentTask == " ") {
            tasks.push({
                name: currentTask,
                status: false,
            })
            this.setState({
                tasks,
                currentTask: '',
                errorText: ''
            })
        }
        else {
            this.setState({
                errorText: 'Please fill the name of task.'
            })
        }
    }

    deleteTask(index) {
        let tasks = this.state.tasks;
        tasks.splice(index, 1)
        this.setState({
            tasks
        })
    }

    editTask(index, newValue) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;
        this.setState({
            tasks
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button className="logoutbtn" type="button">Logout&nbsp;
                    <span className="glyphicon glyphicon-log-out"></span>
                    </button>
                </div>
                <TodoForm
                    currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}
                    error={this.state.errorText}
                />
                {this.state.tasks.map((task, index) => (
                    <TodoItem key={index} index={index} detail={task}
                              clickHandler={this.changeStatus}
                              deleteTask={this.deleteTask}
                              editTask={this.editTask}/>
                ))}
            </div>
        );
    }
}

export default Todo;
