    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
    import { render } from "react-dom";
    import TopNavBar from "./TopNavBar";
    import BottomNavBar from "./BottomNavBar";
    import axios from 'axios';
    import { Navigate  } from 'react-router-dom';
    export let myGlobal = { username: ""};
class login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            success:"",
            redirect: null,
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    };
    handleSubmit(e){

        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        var API_URL = "http://localhost:5000/login";
        e.preventDefault()  
        console.log("submit")
        console.log(username);
        console.log(password);
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        console.log(formData)
        fetch(
            API_URL,{
                body:formData,
                method:"post"
            }
            ).then(
                res => res.json().then(
                    res=>{console.log(res)
                    if(res.status === true){
                        console.log(res.user);
                        myGlobal.username = res.user.name;
                        console.log(myGlobal.username);
                        this.setState({ redirect: true });
                    }
                })
            )
    }
            
    render(){

        if (this.state.redirect) {
            return (
                <Navigate  to="/projects" />
            );
        }
        return (
            
            <div>
                <div style={{paddingTop:"50px"}}>LOGIN PAGE</div>
                <form onSubmit={this.handleSubmit} className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" />
                    <TextField id="password" label="Password" variant="standard" />
                    <input type="submit"></input>
                </form>
                <p>{this.state.success}</p>
            </div>
            
        );
    };

};
export default login;