import React, {Component} from 'react'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
        this.val = this.val.bind(this);
    }

    val(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>User Authentication Form</h2>
                <div className="row">
                    <div className="3">&nbsp;</div>
                    <div className="5">
                        <form className="loginForm">
                            <input className="loginbox" type="text" name="name" onChange={this.val}
                                   placeholder="Enter User Name"/><br/>
                            <input className="loginbox" type="password" name="password" onChange={this.val}
                                   placeholder="Enter Password"/><br/>
                            <button className="loginbtn" type="button"
                                    onClick={this.props.logindetails.bind(this, this.state.name, this.state.password)}>
                                Login &nbsp;<span className="glyphicon glyphicon-log-in"></span>
                            </button>
                            <h3>{this.props.Error}</h3>
                        </form>
                    </div>
                    <div className="4">&nbsp;</div>
                </div>
            </div>
        )
    }
}

export default Home;