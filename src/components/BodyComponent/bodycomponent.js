import React, { Component } from 'react';
import "./bodycomponent.css"
import Button from '../reuseablecomponents/button'

class Bodycomponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			

		}
	}
	render() {
		let arr = ["c", "del", "%", "+", 1, 2, 3, "-", 4, 5, 6, "*", 7, 8, 9, "/", 0, "00", ".", "="]
		const clear=()=>{

		}
		const add = (event) => {
			let value=event.target.value
			console.log(value)
			if(value==="c"){
				this.clear()
			}
		}

		return (
			<>
				<div className="card shadow d-flex flex-column m-3">
					<h5 className="align-self-start p-2">2*2</h5>
					<h2 className="align-self-end p-2">4</h2>
				</div>
				<div className="container">
					<div className="row shadow p-2">
						{arr.map((value) => {
							return (
								<div className="col-3">
									<Button className="btn btn-grey col-12 mt-2" value={value} onClick={(event) => this.add(event)} btnText={value} />
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
