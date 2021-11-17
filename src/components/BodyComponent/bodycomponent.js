/**
 * Importing all the local components
 */
import React, { Component } from "react";
import "./bodycomponent.css";
import Button from "../reuseablecomponents/button";


/**
 * creating Class Component as BodyComponent
 * created states when = buttton is clicked operations are performed  
 
 */
class Bodycomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      operand: "",
      sumofoperation: "",
      operator: "",
      upperdisplay: "",
      lowerdisplay: "",
      exceeded:""
    };
  }

  clear = () => {
    this.setState({
      operand: "",
      operator: "",
      upperdisplay: "",
      lowerdisplay: "",
      deleteoperand: "",
    });
  };
  backspace = () => {
    console.log(this.state.upperdisplay);
    this.setState({
      upperdisplay: this.state.upperdisplay.slice(0, -1),
    });
  };
  lowerdisplay = (splittedNumber) => {
    if (this.state.operator == "+") {
      let num = splittedNumber.reduce((a, b) => a + b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator == "-") {
      let num = splittedNumber.reduce((a, b) => a - b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator == "*") {
      let num = splittedNumber.reduce((a, b) => a * b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator == "/") {
      let num = splittedNumber.reduce((a, b) => a / b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator == "%") {
      let num = splittedNumber.reduce((a, b) => a % b);
      this.setState({ lowerdisplay: num });
    }
  };
  /**
   *
   * @param {*} event
   * @description any button clicked this add function gets called
   * all the operations are performed in this function
   * stored upperdisplay state in history
   */
  add = (event) => {
    let value = event.target.value;
    if (value == "=") {
      let splittedValue = this.state.upperdisplay.split(this.state.operator);
      const splittedNumber = splittedValue.map(Number);
      console.log(splittedNumber);
      this.lowerdisplay(splittedNumber);
      let array = [...this.state.history];
      array.push(this.state.upperdisplay);

      this.setState({ history: array });
    }
    if (value == "+") {
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value == "-") {
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value == "*") {
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value == "%") {
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value == "/") {
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    } else if (value == "c") {
      this.clear();
    } else if (value == "del") {
      this.backspace();
    } else if (
      value == "1" ||
      value == "2" ||
      value == "3" ||
      value == "4" ||
      value == "5" ||
      value == "6" ||
      value == "7" ||
      value == "8" ||
      value == "9" ||
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "%" ||
      value == "/" ||
      value == "0"
    ) {
      this.setState({ upperdisplay: this.state.upperdisplay + value });
      if(this.state.upperdisplay.length>10){
        this.setState({exceeded:"Limit exceeded"})
      }
    }
  };
  render() {
    let arr = [
      "c",
      "del",
      "%",
      "+",
      1,
      2,
      3,
      "-",
      4,
      5,
      6,
      "*",
      7,
      8,
      9,
      "/",
      0,
      "00",
      ".",
      "=",
    ];

    return (
      <>
        <div className="card shadow d-flex flex-column m-3">
          <h5 className="align-self-start p-2">{this.state.upperdisplay}</h5>
          <h2 className="align-self-end p-2">{this.state.lowerdisplay}</h2>
        </div>
        <div className="container">
          <div className="row  p-2">
            {arr.map((value) => {
              return (
                <div className="col-3 shadow bg-grey" style = {{backgroundSize:"cover"}}>
                  <Button
                    className="btn btn-primary col-12 mt-2"
                    value={value}
                    handleClick={(event) => this.state.exceeded?"": this.add(event)}
                    btnText={value}
                  />
                </div>
              );
            })}
            <p>{this.state.exceeded}</p>
          </div>
        </div>
      </>
    );
  }
}
export default Bodycomponent;
