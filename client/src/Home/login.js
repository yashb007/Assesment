import React,{ Component} from 'react';
import './header.css'

import M from 'materialize-css/dist/js/materialize.min.js';

class Login extends React.Component{
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
       email : null,
       password : null,
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }


 subDetails = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/login",{
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
          M.toast({html:"Login Successfully  ",classes:"#43a047 green darken-1"})
          
         }
      }
        ).catch(err => console.log(err))
}

render(){
return (
    <div style={{width:"418px"}}>
    
    <div className="row">
    
    <div className=" col s6 ">
      <p style={{fontSize:"24px",marginLeft:"24px",marginTop:"69px"}}>Login</p>
      </div>
      
    <div className=" col s6 ">
          <a href="/" class="right-align btn-flat" style={{fontSize:"24px",marginLeft:"124px",marginTop:"69px"}}>X</a>
    
          </div>
          </div>
      <div className="">
           <div  style={{marginTop:"84px",padding:"16px 22px 16px 22px",height:"371px",boder:"2px solid #707070"}}>
         
           <p style={{color:"#7ECB20",fontSize:"27px"}} className ="center-align" > Student </p>
         <hr style={{width:"50%",color:"#7ECB20"}} />
     
         <div className="row">
         <div className=" col s12 center-align">
         <input id="email" type="email" className="validate black-text  " onChange={this.handleChange}
    placeholder="Email" style={{border: "1px solid #707070",background: "#FFFFFF ",opacity:"0.57",width:"336px",height:"48px"}}/>
     </div>
     </div>
     
     <div className="row">
     <div className=" col s12 center-align">
         <input id="password" type="password" className="validate black-text "  onChange={this.handleChange}
          placeholder="password" style={{border: "1px solid #707070",background: "#FFFFFF",opacity:"0.57",width:"336px",height:"48px"}}/>
     </div>
     </div>
     
     <div className="row right-align">
   <a style={{color:"#7ECB20"}} className ="right-align"> Forget Password ? </a>
   </div>
   
   <div className=" row  center-align">
     <button className="btn center-align white-text "   style={{width:"336px",height:"48px",fontSize:"22px",backgroundColor:"#7ECB20",borderStyle:"none"}} onClick={this.subDetails} >Sign up</button>   
     </div>
     
   <div className=" row  center-align">
     <p>New to MyWays? <a className="black-text">Sign Up here</a></p>
     </div>
     </div>
     </div>    
     </div>


)
}}

export default Login;
