import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        }
        this.toggleState = this.toggleState.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    toggleState() {
        const {isEditing}=this.state;
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    updateItem(event) {
        event.preventDefault();
        this.props.editTask(this.props.index, this.input.value)
        this.toggleState();
    }


    render() {
        const isEditing = this.state.isEditing;
        return (
            <div>
                {
                    isEditing ? <form className="editform" onSubmit={this.updateItem}>
                            <input type="text" className="updateform" ref={(value) => {
                                this.input = value
                            }}
                                   defaultValue={this.props.detail.name}/>
                            <button type="submit" className="updatebtn">Update Task</button>
                        </form>
                        : <table>
                            <tbody>
                            <tr className={this.props.detail.status ? 'completed' : ''}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    this.props.clickHandler(this.props.index)
                                }}>
                                <td colSpan="3">
                                    {this.props.detail.name}
                                </td>
                                <td>
                                    <button onClick={() => {
                                        this.toggleState()
                                    }}>Edit&nbsp;<span className="glyphicon glyphicon-edit"></span></button>
                                </td>
                                <td>
                                    <button onClick={(event) => {
                                        event.stopPropagation();
                                        this.props.deleteTask(this.props.index)
                                    }}>Delete&nbsp;<span className="glyphicon glyphicon-remove"></span></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                }

            </div>
        )
    }
}

export default TodoItem;