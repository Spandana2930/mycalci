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
    add = (event)=>{
        console.log(event.target.value)
        let value = event.target.value 
        if (value === "="){
            this.setState({operand:""})
        }
    this.setState({operand:this.state.operand+event.target.value})
   
   }
	render() {
		let arr = ["c", "del", "%", "+", "1", "2", "3", "-", "4", "5", "6", "*", "7", "8", "9", "/", "0", "00", ".", "="]
		const add = () => {

		}

		return (
			<>
				<div className="card shadow d-flex flex-column m-3">
					<h5 className="align-self-start p-2">{this.state.operand}</h5>
					<h2 className="align-self-end p-2">4</h2>
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
