import React,{useState,useEffect} from 'react';
import '../css/header.css'
import Header from './header'
import Thanku from './thanku'
import img from '../asset/img.jpg'
import M from 'materialize-css';
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
 //
}

      state = {
       first_name  : this.props.data.first_name,
       last_name : this.props.data.last_name , 
       password : this.props.data.password , 
       email : this.props.data.email,
       otpsent : false,
       otp_back:this.props.data.otp_back,
       otp_front:null,
       match:false
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
      


 subDetails = () => {
   console.log(this.state.otp_front)
    //e.preventDefault();
    console.log("subbb")
    if(this.state.otp_front == this.state.otp_back){
      console.log("matched")
    fetch("/user/signup",{
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
          this.setState({
            match : true
          })
          window.location.reload()
         M.toast({html:"Registered Successfully  ",classes:"#43a047 green darken-1"})
                
                
          console.log(data)
          console.log(this.state)
      //     setData({otpsent : true,otp_back : data.result})
         }
      }
        ).catch(err => console.log(err))
}}

render(){
  if(!this.state.match){
return (
    <div>
   <span className="left-align" style={{marginLeft:"-600px"}}> <i className="fa fa-arrow-left "  aria-hidden="true"></i></span>

<div className=" center-align" style={{marginTop:"80px"}} >

<h4 > OTP sent!  </h4>

<div className="row">
<div className=" col s12 ">
    <input id="otp_front" type="text" className="validate black-text " onChange={this.handleChange}
     placeholder="Enter your OTP"  style={{width:"367px",height:"57px",fontSize:"32px",background: "#FFFFFF 0% 0% no-repeat padding-box",borderRadius:"32px",borderColor:"2px solid black",borderStyle:"none"}}/>
</div>
</div>
<p >One time passcode sent to your email ID-</p>
<p>{this.state.email}</p>
<button className=" center-align white-text " onClick={this.subDetails}     style={{width:"367px",height:"57px",fontSize:"32px",backgroundColor:"#7ECB20",borderRadius:"32px",borderStyle:"none"}}  >Enter</button>   

</div>
</div>

)}
else{
  return(
  <div>
     
  <img src={img} />
     
   <h4> <b>Thanks. Successfull</b></h4>   


</div>
  )
}

}}

export default Otp;
