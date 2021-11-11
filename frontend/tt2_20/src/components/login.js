    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
<<<<<<< HEAD
    import { render } from "react-dom";
    import TopNavBar from "./TopNavBar";
    import BottomNavBar from "./BottomNavBar";
=======
    import ReactDOM from "react-dom";
    import { createBrowserHistory } from "history";

>>>>>>> 2a76e00c907ec39f5aa72133a6c2301537721a7a
class login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
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
        // form=JSON.stringify(this.state)
        // if (fetch("api/login",body=form)){

        // }
        // const location = {
        //     pathname: '/ProjectTable',
        //     state: { fromDashboard: true }
        //   }
        //   history.push(location    )
    }
    render(){
        return (
            
            <div>
<<<<<<< HEAD
                <TopNavBar/>
                <form className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" />
                    <TextField id="password" label="Password" variant="standard" />
                    <input type="submit" onSubmit></input>
=======
                <h1>Login Page</h1>
                <form className={FormControl} onSubmit={this.handleSubmit}>
                    <TextField id="username" label="Username:" variant="standard" onChange={this.handleUser} />
                    <TextField id="password" label="Password" variant="standard" onChange={this.handlePw} />
                    <input type="submit" value="Login"></input>
>>>>>>> 2a76e00c907ec39f5aa72133a6c2301537721a7a
                </form>
                <BottomNavBar/>
            </div>
            
        );
    };

};
export default login;