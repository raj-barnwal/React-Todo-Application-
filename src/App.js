import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Todo from './components/Todo'
import user from './components/UserLoginData'

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            authentication: false,
            errorText: '',
        }
        this.logindetails = this.logindetails.bind(this)
    }


    logindetails(name, password) {
        function findname(user) {
            return (user.username === name) && (user.password == password);
        }

        if (user.find(findname)) {
            this.setState({
                name,
                password,
                authentication: true,
            })
            this.setState({
                errorText: ''
            })
        }
        /*else if (name == " ") {
         this.setState({
         errorText: 'Please fill your correct user name'
         })
         }*/
        else {
            this.setState({
                errorText: 'You have entered wrong user name or password.'
            })
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <h2>Todo User Friendly App</h2>
                        <div className="row header">
                            <div className="col-md-3">&nbsp;</div>
                            <div className="col-md-5 menu">
                                <ul>
                                    <li><Link to="/home"><span className="glyphicon glyphicon-home">&nbsp;
                                        Home</span></Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact"><span className="glyphicon glyphicon-phone">&nbsp;
                                        ContactUs</span></Link></li>

                                </ul>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="content">
                            <Route path="/Home" exact
                                   render={props => (< Home{...props} logindetails={this.logindetails}/>)}/>
                            {this.state.authentication ? <Redirect to="/Todo"/> : <span></span> }
                            <h4> {this.state.errorText}</h4>
                            <Route path="/about" component={About}/>
                            <Route path="/Todo" component={Todo}/>
                            <Route path="/contact" component={Contact}/>
                        </div>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
