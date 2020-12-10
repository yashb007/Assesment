import React ,{useEffect , useState} from 'react';
import '../css/header.css'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import image from '../asset/logo.png'
import image1 from '../asset/instant.png'
import d from '../asset/Path 2.svg'
import Signin from './signin'
import Login from './login'

import {Button , Drawer} from '@material-ui/core'






function Header() {

   const [draw,setDraw] = useState(false)

   const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDraw(true);
  };
    useEffect(() => {
       M.AutoInit()
       document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
      });
    
    },

       [])
    
  return (
      <div>
    <ul id="dropdown1" className="dropdown-content" style ={{marginTop:"70px"}} >
    <li className="black-text  valign-wrapper"  style ={{width:"270px"}} ><h6>Find matching internships</h6></li>
    <li className="divider"></li>
    <li className="black-text  valign-wrapper"><h6>Hire right talent</h6></li>
    <li className="divider"></li>
    <li className="black-text  valign-wrapper"><h6>Work from Home</h6></li>
  </ul>
    <nav className="back ">
      <div className="container ">
        <div className="nav-wrapper ">
          <a href="#" className="brand-logo"><img src={image} /></a>
          <a href="#" data-target="mobile" className="sidenav-trigger show-on-medium-and-down black-text"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="list"><a className="dropdown-trigger black-text"  data-target="dropdown1" data-constrainwidth="false">For You <img src={d}  />  </a></li>
            <li className="list"  ><a className="black-text valign-wrapper" href="/"> <img src={image1}  /> Instant Apply</a></li>
            <li className="list" ><a className="black-text" href="/">Pricing</a></li>
            <li className="list" ><a className="black-text" href="/">About Us</a></li>
            <li className="list" ><a className="signup modal-trigger" href="#modal2"   data-target="modal2" >SIGN UP</a></li>
            <button className=" center-align white-text" onClick={toggleDrawer()} style={{width:"134px",height:"38px",fontSize:"16px",backgroundColor:"#7ECB20",borderRadius:"25px",borderStyle:"none"}} >LOGIN</button>   
          
            <Drawer anchor="right" className="drawer"  open={draw} onClose={toggleDrawer()}>
              <Login />
            </Drawer>
          
          </ul>
          <ul id="mobile" className="sidenav ">
            <li ><a className="black-text"  >For You <img src={d}  />  </a></li>
            <li className="divider"></li>
            <li  ><a href="#!" className="black-text">Find matching internships</a></li>
            <li ><a href="#!">Hire right talent</a></li>
            
            <li ><a href="#!">Work from Home</a></li>
            <li   ><a className="black-text valign-wrapper" href="/"> <img src={image1}  /> Instant Apply</a></li>
            <li  ><a className="black-text" href="/">Pricing</a></li>
            <li  ><a className="black-text" href="/">About Us</a></li>
            <li  ><a className="signup modal-trigger" href="#modal2"  data-target="modal2" >SIGN UP</a></li>
            <button className=" center-align white-text" onClick={toggleDrawer()} style={{width:"134px",height:"38px",marginLeft:"20px",fontSize:"16px",backgroundColor:"#7ECB20",borderRadius:"25px",borderStyle:"none"}} >LOGIN</button>   
          
            <Drawer anchor="right" className="drawer"  open={draw} onClose={toggleDrawer()}>
              <Login />
            </Drawer>
          
          </ul>
          <div id="modal2" className="modal" style={{width:"676px",height:"577px",borderRadius:"20px"}}>
          <div class="modal-header right-align">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat" style={{marginRight:"25px", marginTop:"25px"}}>X</a>
          </div>
          <div class="modal-content" style={{marginTop:"-40px"}}>
              <Signin />

          </div>
        </div>
        </div>
      </div>
    </nav>
  
 
    



  </div>
  );
}

export default Header;
