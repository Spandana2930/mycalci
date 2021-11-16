import React, { Component } from 'react';
import "./bodycomponent.css"
import Button from '../reuseablecomponents/button'

class Bodycomponent extends Component {
    
	constructor(props) {
		super(props)
		this.state = {
          history:"",
          operand:"",
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
	clear=()=>{
		this.setState({
			history:"",
			operand:"",
			operator:"",
			upperdisplay:"",
			lowerdisplay:"",
			deleteoperand:""
		}
		)
	}
	backspace = () => {
		console.log("come")
		console.log(this.state.upperdisplay)
		this.setState({
				upperdisplay: this.state.upperdisplay.slice(0, -1)
		})
};
    add = (event)=>{
        console.log(event.target.value)
        let value = event.target.value 
        if (value == "="){
            this.calculate()
        }
				else if(value=="c"){
					this.clear()
				}
				else if(value=="del")
				{
					this.backspace()
				}
				else if(value=="1"||value=="2"||value=="3"||value=="4"||value=="5"||value=="6"||value=="7"||value=="8"||value=="9"){
    			this.setState({upperdisplay:this.state.upperdisplay+value})
				}
   }
	render() {
		let arr = ["c", "del", "%", "+", 1, 2, 3, "-", 4, 5, 6, "*", 7, 8, 9, "/", 0, "00", ".", "="]
	

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
