    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
    import ReactDOM from "react-dom";
    import { createBrowserHistory } from "history";

class login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            success:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleUser=this.handleUser.bind(this)
        this.handlePw=this.handlePw.bind(this)
    };
    handlePw(e){
        this.setState({
            password:e.target.value
        })
    }
    handleUser(e){
        this.setState({
            username:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()  
        console.log("submit")
        form=JSON.stringify(this.state)
        if (fetch("api/login",body=form)){      
        const location = {
            pathname: '/ProjectTable',
            state: { fromDashboard: true }
          }
          history.push(location)}
          else{
              this.setState(
                  (state)=>{
                      success:"login failed"
                  }
              )
          }
    }
    render(){
        return (
            <div>
                <h1>Login Page</h1>
                <form className={FormControl} onSubmit={this.handleSubmit}>
                    <TextField id="username" label="Username:" variant="standard" onChange={this.handleUser} />
                    <TextField id="password" label="Password" variant="standard" onChange={this.handlePw} />
                    <input type="submit" value="Login"></input>
                </form>
                <p>{this.state.success}</p>
            </div>
            
        );
    };

};
export default login;