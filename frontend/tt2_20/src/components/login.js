    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
    import { Navigate  } from 'react-router-dom';
    import logo from './DBSLogo.jpg'
    
    import { myGlobal,myUserid } from './global';
    
class login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            usernames:"",
            password:"",
            success:"",
            redirect: null,
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    };
    handleSubmit(e){

        
        var username = document.getElementById("username").value
        this.setState({ usernames: username })
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
                        myUserid.id = res.user.id;
                        console.log(myGlobal.username);
                        this.setState({ redirect: true });
                    }
                    else{
                        this.setState({success:"Wrong user/password!"})
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
            
            <div style={{position: 'absolute',
                top: '15%',
                }}>
                    <img src={logo} style={{width:'auto',height:'auto',maxWidth:"20%"}} />
                <div>
                    <h1>LOGIN PAGE</h1>
                </div>
                
                <form onSubmit={this.handleSubmit} className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" style={{padding:3}} /> 
                    <TextField type="password" id="password" label="Password" variant="standard" style={{padding:3}} />
                    <input type="submit" value="Login"></input>
                </form>
                <p>{this.state.success}</p>
            </div>
            
        );
    };

};
export default (login);