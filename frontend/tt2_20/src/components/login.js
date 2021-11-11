    import React from "react";
    import Button from '@mui/material/Button';
    import FormControl from '@mui/material/FormControl';
    import TextField from '@material-ui/core/TextField'; 
    import { render } from "react-dom";
    import TopNavBar from "./TopNavBar";
    import BottomNavBar from "./BottomNavBar";
class login extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            
            <div>
                <TopNavBar/>
                <form className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" />
                    <TextField id="password" label="Password" variant="standard" />
                    <input type="submit" onSubmit></input>
                </form>
                <BottomNavBar/>
            </div>
            
        );
    };

};
export default login;