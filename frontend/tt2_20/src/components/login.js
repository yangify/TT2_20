    import React from "react";
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 

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
        console.log(JSON.stringify(this.state))
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
            </div>
            
        );
    };

};
export default login;