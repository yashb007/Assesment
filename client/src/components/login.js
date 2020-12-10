import React,{ Component} from 'react';
import '../css/header.css'
import img from '../asset/img.jpg'
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/login.css'
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
  M.AutoInit();
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });
}

      state = {
       email : null,
       password : null,
       islogin:false
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }


 subDetails = (e) => {
    e.preventDefault();
    fetch("/user/login",{
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
          this.setState({
            islogin:true
          })
          window.location.reload();
          return (
            <div id="modal1" className="modal" style={{width:"676px",height:"577px",borderRadius:"20px"}}>
            <div class="modal-header right-align">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat" style={{marginRight:"25px", marginTop:"25px"}}>X</a>
            </div>
            <div class="modal-content" style={{marginTop:"-40px"}}>
                          
  <img src={img} />
     
  <h4> <b>Thanks. Successfull</b></h4>   
 
            </div>
          </div>
          )
          
         }
      }
        ).catch(err => console.log(err))
}

render(){
return (
    <div className="main" style={{width:"418px"}}>
    
    <div className="row">
    
    <div className=" col s6 ">
      <p style={{fontSize:"24px",marginLeft:"24px",marginTop:"69px"}}>Login</p>
      </div>
      
    <div className=" col s6 ">
          <a href="/" className="right-align btn-flat" style={{fontSize:"24px",marginLeft:"124px",marginTop:"69px"}}>X</a>
    
          </div>
          </div>
      <div className="">
           <div className="wd"  style={{marginTop:"84px",padding:"16px 22px 16px 22px",height:"371px",boder:"2px solid #707070"}}>
         
           <p style={{color:"#7ECB20",fontSize:"27px"}} className ="center-align" > Student </p>
         <hr style={{width:"50%",color:"#7ECB20"}} />
     
         <div className="row">
         <div className=" col s12 center-align">
         <input id="email" type="email" className="validate black-text wd " onChange={this.handleChange}
    placeholder="Email" style={{border: "1px solid #707070",paddingLeft: "8px",paddingRight: "8px",background: "#FFFFFF ",opacity:"0.57",width:"336px",height:"48px"}}/>
     </div>
     </div>
     
     <div className="row">
     <div className=" col s12 center-align wd">
         <input id="password" type="password" className="validate black-text  wd"  onChange={this.handleChange}
          placeholder="password" style={{border: "1px solid #707070",paddingLeft: "8px",paddingRight: "8px",background: "#FFFFFF",opacity:"0.57",width:"336px",height:"48px"}}/>
     </div>
     </div>
     
     <div className="row right-align">
   <a style={{color:"#7ECB20",marginRight:"10px"}} className ="right-align"> Forget Password ? </a>
   </div>
   
   <div className=" row  center-align">
     <button className="btn center-align white-text modal-trigger wd " href="#modal3" data-target="modal3"   style={{width:"336px",height:"48px",fontSize:"22px",backgroundColor:"#7ECB20",borderStyle:"none"}} onClick={this.subDetails} >Sign up</button>   
     </div>
     
   <div className=" row  center-align">
     <p>New to MyWays? <a className="black-text">Sign Up here</a></p>
     </div>
     </div>
     </div>    
     </div>


)}}

export default Login;
