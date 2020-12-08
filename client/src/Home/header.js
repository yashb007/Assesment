import React ,{useEffect , useState} from 'react';
import './header.css'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import image from './logo.png'
import image1 from './instant.png'
import d from './Path 2.svg'
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
    <div class="nav-wrapper ">
      <a href="#" class="brand-logo"><img src={image} /></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li className="list"><a className="dropdown-trigger black-text"  data-target="dropdown1" data-constrainwidth="false">For You <img src={d}  />  </a></li>
        <li className="list"  ><a className="black-text valign-wrapper" href="/"> <img src={image1}  /> Instant Apply</a></li>
        <li className="list" ><a className="black-text" href="/">Pricing</a></li>
        <li className="list" ><a className="black-text" href="/">About Us</a></li>
        <li className="list" ><a className="signup"  href="/" >SIGN UP</a></li>
        <button className=" center-align white-text" onClick={toggleDrawer()} style={{width:"134px",height:"38px",fontSize:"16px",backgroundColor:"#7ECB20",borderRadius:"25px",borderStyle:"none"}} >LOGIN</button>   
      
        <Drawer anchor="right" className="drawer"  open={draw} onClose={toggleDrawer()}>
          <Login />
        </Drawer>
      
        </ul>
      
    </div>
    </div>
  </nav>
  <ul id="dropdown1" className="dropdown-content" >
    <li  ><a href="#!">Find matching internships</a></li>
    <li className="divider"></li>
    <li ><a href="#!">Hire right talent</a></li>
    <li className="divider"></li>
    <li ><a href="#!">Work from Home</a></li>
  </ul>
    
<div id="slide-out" class="sidenav"> 
 dfrgvrvrbr

</div>


  </div>
  );
}

export default Header;
