    import React from "react";
    import Button from '@mui/material/Button';
    import FormControl from '@mui/material/FormControl';
    import { render } from "react-dom";

class login extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <form className={FormControl}>
                    <TextField id="username" label="Username:" variant="standard" />
                    <TextField id="password" label="Password" variant="standard" />
                    <input type="submit" onSubmit></input>
                </form>
            </div>
            
        );
    };

};
export default login;