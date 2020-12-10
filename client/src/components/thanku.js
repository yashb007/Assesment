import React,{useEffect} from 'react';
import '../css/header.css'
import Header from './header'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Thanku() {
    useEffect(() => {
      M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    })
  return (
   
<div>
<div id="modal1" className="modal">
<div className="modal-content">
  <h4>Modal Header</h4>
  <p>A bunch of text</p>
</div>
</div>
</div>

  );
}

export default Thanku;
