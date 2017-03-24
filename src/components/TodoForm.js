import React, {Component} from 'react';

class TodoForm extends Component {
    render() {
        return (
            <div>
                <h1>
                    <marquee>Welcome To ToDo Application...</marquee>
                </h1>
                <h4>{this.props.error}</h4>
                <div className="row">
                    <div className="col-md-1">&nbsp;</div>
                    <div className="col-md-11">
                        <form onSubmit={this.props.addTask}>
                            <input type="text" className="taskbox"
                                   value={this.props.currentTask}
                                   onChange={this.props.updateTask}
                                   placeholder="Enter task name...."/>
                            <button className="addtask" type="submit">Add New Task</button>

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default TodoForm;