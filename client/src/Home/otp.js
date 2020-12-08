import React,{useState,useEffect} from 'react';
import './header.css'
import Header from './header'
import M from 'materialize-css/dist/js/materialize.min.js';
// const Otp = ({props}) => {
  class Otp extends React.Component{

    // const [data,setData] = useState({first_name :props.data.first_name,
    //     last_name:props.data.last_name,
    //     email:props.data.email,
    //     password:props.data.password,
    //     otp_front : "",
    //     otp_back : props.data.otp_back
    //       })
   
//const {first_name,last_name,email,password,otp_front,otp_back} = props.data

componentDidMount(){

  console.log(this.props)
 // M.AutoInit()
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
      


 subDetails = () => {
    //e.preventDefault();
    if(this.state.otp_front == this.state.otp_back){
    fetch("http://localhost:8080/user/signin",{
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
          M.toast({html:"Registered Successfully  ",classes:"#43a047 green darken-1"})
       console.log(data)
      //     setData({otpsent : true,otp_back : data.result})
         }
      }
        ).catch(err => console.log(err))
}}

render(){
return (
    <div>
   <span className="left-align" style={{marginLeft:"-600px"}}> <i className="fa fa-arrow-left "  aria-hidden="true"></i></span>

<div className=" center-align" style={{marginTop:"120px"}} >

<h4 > OTP sent!  </h4>

<div className="row">
<div className=" col s12 ">
    <input id="otp_back" type="email" className="validate black-text " onChange={this.handleChange}
     placeholder="OTP"  style={{width:"367px",height:"57px",fontSize:"32px",background: "#FFFFFF 0% 0% no-repeat padding-box",borderRadius:"1px solid #707070",border: "1px solid #707070",borderStyle:"none"}}/>
</div>
</div>
<p >One time passcode sent to your email ID-</p>
<p>dxubwdux</p>
<button className="btn center-align white-text"    style={{width:"367px",height:"57px",fontSize:"32px",backgroundColor:"#7ECB20",borderRadius:"32px",borderStyle:"none"}}  >Enter</button>   

</div>
</div>
)


}}

export default Otp;
