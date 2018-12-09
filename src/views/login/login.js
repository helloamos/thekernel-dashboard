import React from 'react';
import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";
//const history = createBrowserHistory();
class Login extends React.Component {

    constructor(props){
        super(props)
        this.loginHandler = this.loginHandler.bind(this)
        this.state = {toDashboard: false}
    }

    loginHandler(e){
        e.preventDefault()
        //console.log(this)
        this.props.history.push("/dashboard")
    }
    render(){
        return(
            <div className="login-wrapper">
                <h2>Welcome to login</h2>
                <input type="button" name="submit" value="Se connecter" onClick={this.loginHandler}/>
            </div>
        )
    }
}

export default withRouter(Login);