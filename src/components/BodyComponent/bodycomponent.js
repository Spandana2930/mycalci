import React, { Component } from 'react';
import "./bodycomponent.css"
import Button from '../reuseablecomponents/button'

class Bodycomponent extends Component {
    
	constructor(props) {

		super(props)
		this.state = {
          history:"",
          operand:"",
          sumofoperation:"",
          operator:"",
          upperdisplay:"",
          lowerdisplay:""
		}
	}

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                lowerdisplay: (eval(this.state.lowerdisplay) || "" ) + ""
            })
        } catch (e) {
            this.setState({
               lowerdisplay: "error"
            })

        }
    };


    add = (event)=>{
        
        let value = event.target.value 

        if (value == "="){
          this.calculate()
            this.setState({upperdisplay:""})
        }    
        // if (value === "+"){
        //     console.log("true")
        //     let splittedValue = this.operand.split("+")
        //     console.log(splittedValue)
        //     this.setState({lowerdisplay:Math.sum(splittedValue)})
        //     console.log(this.state.operand)
        // } 
        if(value == "del"){
            console.log(value)
            this.setState({upperdisplay:this.state.upperdisplay.slice(0,-1)})
        }  
        if(value == "c"){
            this.setState({upperdisplay:""})
        } 
        else{
            this.setState({upperdisplay:this.state.upperdisplay+value})
        }
    
   
   }
	render() {
		let arr = ["c", "del", "%", "+", "1", "2", "3", "-", "4", "5", "6", "*", "7", "8", "9", "/", "0", "00", ".", "="]
		

		return (
			<>
				<div className="card shadow d-flex flex-column m-3">
					<h5 className="align-self-start p-2">{this.state.upperdisplay}</h5>
					<h2 className="align-self-end p-2">{this.state.lowerdisplay}</h2>
				</div>
				<div className="container">
					<div className="row shadow p-2">
						{arr.map((value) => {
							return (
								<div className="col-3">
									<Button className="btn btn-grey col-12 mt-2" value={value} handleClick={(event) => this.add(event)} btnText={value} />
								</div>
							)
						})}
					</div>
				</div>
			</>
		);
	}
}

export default Bodycomponent;
