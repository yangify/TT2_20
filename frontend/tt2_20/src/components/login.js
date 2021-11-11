    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
    import { render } from "react-dom";
    import TopNavBar from "./TopNavBar";
    import BottomNavBar from "./BottomNavBar";
    
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
        // form=JSON.stringify(this.state)
        // if (fetch("api/login",body=form)){      
        // const location = {
        //     pathname: '/ProjectTable',
        //     state: { fromDashboard: true }
        //   }
        //   history.push(location)}
        //   else{
        //       this.setState(
        //           (state)=>{
        //               success:"login failed"
        //           }
        //       )
        //   }
    }
    render(){
        return (
            
            <div>
                <TopNavBar />
                <form className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" />
                    <TextField id="password" label="Password" variant="standard" />
                    <input type="submit" onSubmit></input>
                </form>
                <p>{this.state.success}</p>
            </div>
            
        );
    };

};
export default login;