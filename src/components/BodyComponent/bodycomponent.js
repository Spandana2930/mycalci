import React, { Component } from 'react';
import "./bodycomponent.css"
class Bodycomponent extends Component {
    render() {
        return (
            <>
            <div class="calculator">
 <div class="input" id="input"></div>
 <div class="buttons">
   <div class="operators">
     <div>+</div>
     <div>-</div>
     <div>&times;</div>
     <div>&divide;</div>
   </div>
   <div class="leftPanel">
     <div class="numbers">
       <div>7</div>
       <div>8</div>
       <div>9</div>
     </div>
     <div class="numbers">
       <div>4</div>
       <div>5</div>
       <div>6</div>
     </div>
     <div class="numbers">
       <div>1</div>
       <div>2</div>
       <div>3</div>
     </div>
     <div class="numbers">
       <div>0</div>
       <div>.</div>
       <div id="clear">C</div>
     </div>
   </div>
   <div class="equal" id="result">=</div>
 </div>
</div>
           </>
        );
    }
}

export default Bodycomponent;
