import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { myGlobal } from './global';

import { Navigate  } from 'react-router-dom';
class TopNavBar extends React.Component {
  constructor(props){
      super(props);
      this.state={
          usernames:"",
          password:"",
          success:"",
          redirect: null,
      }
      this.logout=this.logout.bind(this)
  };
  
  logout(){
    console.log("byebye");
    this.setState({ redirect: true });
  }
          
  render(){

      if (this.state.redirect) {
          return (
              <Navigate  to="/" />
          );
      }
      return (
          
        <div style={{width:"100vw",height:"65px",paddingTop:"10px",paddingBottom:"10px",background:"#4341A1"}}>
        <div style={{float:"left"}}>
          <div style={{paddingLeft:"20%",color:"white",fontSize:"30px"}}>
            <label>TT2_20</label>
          </div>
        </div>
        <div className="row" style={{float: "right", paddingLeft:"20%"}}>
          <div className="row" style={{color:"white"}}>
            <div><BsPersonCircle size={30}></BsPersonCircle></div>
            <div><label>{myGlobal.username}</label> | <button onClick={this.logout} style={{padding:"0",border:"none",background:"none",color:"white"}}>Logout</button> </div> 
            
          </div> 
          
        </div> 
        
    </div> 
          
      );
  };

};
export default (TopNavBar);
