import React,{useState,useEffect , Component} from 'react';
import '../css/header.css'
import Otp from './otp'

import M from 'materialize-css/dist/js/materialize.min.js';

class Signin extends React.Component{
// const Signin = () => {
//     const [data,setData] = useState({first_name :"",
//         last_name:"",
//         email:"",
//         password:"",
//         otpsent : false,
//         otp_back : ""
//           })
   
// const {first_name,last_name,email,password,otpsent} = data

// useEffect(()=>{
//     M.AutoInit();
//         })

componentDidMount(){
  M.AutoInit()
}

      state = {
       first_name  : null,
       last_name : null , 
       email : null,
       password : null,
       otpsent : false,
       otp_back:null
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }


 subDetails = (e) => {
    e.preventDefault();
    fetch("/user/verify",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
      }).then(res => res.json())
      
      .then(data => { 
        console.log(data)
        if(data.error){
      //    M.toast({html: data.error,classes:"#d32f2f red darken-2"})
        }
        else{
          console.log("1234")
       //   M.toast({html:"Registered Successfully  ",classes:"#43a047 green darken-1"})
       console.log(data)
           this.setState({otpsent : true,otp_back : data.result})
           console.log(this.state.otp_back)
         }
      }
        ).catch(err => console.log(err))
}

render(){
return (
    <div>
    {
        !this.state.otpsent ?   (
        
            <div className="center" >
                  
            <h5 style={{fontSize:"44px",fontStyle:"bold"}} className="black-text">Sign Up</h5>
            <p style={{fontSize:"22px",color:"#212020"}}>It's quick and easy</p>
            
            <div className="container" style={{marginTop:"75px"}}>
            
            <div className="row" style={{width:"360px"}} >
              
              <div className=" col s6 " style={{paddingLeft:"8px"}}>
                  <input id="first_name" type="text" onChange={this.handleChange}
                  className="validate black-text " style={{border: "1px solid #707070",borderRadius:"4px",background: "#FFFFFF 0% 0% no-repeat padding-box",opacity:"0.57",paddingLeft:"2px", paddingRight:"2px"}} placeholder="first name"  />
              </div>
              
              <div className=" col s6 " style={{paddingLeft:"8px"}}>
                  <input id="last_name" type="text" className="validate black-text " onChange={this.handleChange}
                  style={{borderRadius:"1px solid #707070",border: "1px solid #707070",borderRadius:"4px",background: "#FFFFFF 0% 0% no-repeat padding-box",opacity:"0.57",paddingLeft:"2px", paddingRight:"2px"}} placeholder="last name" />
              </div>
            </div> 
            
            <div className="row">
              <div className=" col s12 ">
                  <input id="email" type="email" className="validate black-text " onChange={this.handleChange}
            placeholder="Email" style={{border: "1px solid #707070",borderRadius:"4px",background: "#FFFFFF 0% 0% no-repeat padding-box",opacity:"0.57",width:"336px",paddingLeft:"2px", paddingRight:"2px"}}/>
              </div>
            </div>
            
            <div className="row">
            <div className=" col s12 ">
                <input id="password" type="password" className="validate black-text "  onChange={this.handleChange}
                 placeholder="password" style={{border: "1px solid #707070",borderRadius:"4px",background: "#FFFFFF 0% 0% no-repeat padding-box",opacity:"0.57",width:"336px",paddingLeft:"2px", paddingRight:"2px"}}/>
            </div>
            </div>
            
            <button className="btn center-align white-text "   style={{width:"336px",height:"48px",fontSize:"22px",backgroundColor:"#7ECB20",borderStyle:"none"}} onClick={this.subDetails} >Sign up</button>   
            <br />
            <br />
            <br />

            
            </div>
            </div>
            
            
            
                ) :<Otp data={this.state} />
    }
   
    </div>
)
}}

export default Signin;
