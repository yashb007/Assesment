import React,{useEffect} from 'react';
import './header.css'
import Header from './header'
import Signin from './signin'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Content() {
    useEffect(() => {
      M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    })
  return (
    <div className="center-align" style={{marginTop:"211px"}} >
   
  <h5 style={{fontSize:"41px"}}> Apply here and hear back every time </h5>
 <p  style={{fontSize:"28px",height:"76px"}}> Exploring internships or jobs? Say good-bye to the typical job portals and use <br /> the power of Artificial Intelligence to become successful, faster.  </p>
 <button className="btn center-align white-text modal-trigger" href="#modal1" data-target="modal1"  style={{width:"236px",height:"53px",fontSize:"24px",backgroundColor:"#7ECB20",borderRadius:"25px",borderStyle:"none"}}  >Get Started</button>   

  <div id="modal1" className="modal" style={{width:"676px",height:"577px"}}>
  <div class="modal-header right-align">
  <a href="#!" class="modal-close waves-effect waves-green btn-flat">X</a>
</div>
  <div class="modal-content" style={{marginTop:"-40px"}}>
      {<Signin />}

    </div>
      </div>
 </div>

  );
}

export default Content;
