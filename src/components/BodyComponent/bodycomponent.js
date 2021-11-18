/**
 * Importing all the local components
 */
import React, { Component } from "react";
import "./bodycomponent.css";
import Button from "../reuseablecomponents/button";
import { connect } from "react-redux";

import { getAllStates } from "../../store/actions/index";
/**
 * 
 * @returns default function is used to update redux state
 */
const mapDispatchToProps = () => ({
  getAllStates,
});
/**
 * 
 * @param {*} state 
 * mapStateToProps is used to get data from redux state
 */
const mapStateToProps = (state) => ({
  lowerdisplay: state,
});
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
      upperdisplay: "",
      lowerdisplay: "",
      exceeded: "",
      operator: "",
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
  lowerDisplay = (splittedNumber) => {
    let res 
    if (this.state.operator === "+") {
      res = splittedNumber[0]+splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a + b);
      this.setState({ lowerdisplay: res });
    }
    if (this.state.operator === "-") {
      let num = splittedNumber.reduce((a, b) => a - b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator === "*") {
      let num = splittedNumber.reduce((a, b) => a * b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator === "/") {
      let num = splittedNumber.reduce((a, b) => a / b);
      this.setState({ lowerdisplay: num });
    }
    if (this.state.operator === "%") {
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
    if (value === "=") {
      // this.props.count(this.setState)
      let splittedValue = this.state.upperdisplay.split(this.state.operator);
      const splittedNumber = splittedValue.map(Number);
      this.lowerDisplay(splittedNumber);
      let array = [...this.state.history];
      array.push(this.state.upperdisplay);

      this.setState({ history: array });
      setTimeout(() => {
        this.props.getAllStates(this.state);
      }, 1000);
    }
    if (value === "+") {
      if(this.state.upperdisplay.includes(value)){
        return false 
      }
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
   
    }
    if (value === "-") {
      if(this.state.upperdisplay.includes(value)){
        return false 
      }
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value === "*") {
      if(this.state.upperdisplay.includes(value)){
        return false 
      }
      this.setState({
        
        upperdisplay: this.state.upperdisplay + value,
        operator: value
      });
    }
    if (value === "%") {
      if(this.state.upperdisplay.includes(value)){
        return false 
      }
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    }
    if (value === "/") {
      if(this.state.upperdisplay.includes(value)){
        return false 
      }
      this.setState({
        upperdisplay: this.state.upperdisplay + value,
        operator: value,
      });
    } else if (value === "c") {
      this.clear();
    } else if (value === "del") {
      this.backspace();
    } else if (
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9" ||
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "%" ||
      value === "/" ||
      value === "0" ||
      value === "."
    ) {
      this.setState({ upperdisplay: this.state.upperdisplay + value });

      if (this.state.upperdisplay.length > 10) {
        this.setState({ exceeded: "Limit exceeded" });
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
                <div
                  className="col-3 shadow bg-grey"
                  style={{ backgroundSize: "cover" }}
                >
                  <Button
                    className="btn btn-primary col-12 mt-2"
                    value={value}
                    handleClick={(event) =>
                      this.state.exceeded ? "" : this.add(event)
                    }
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
export default connect(mapStateToProps, mapDispatchToProps())(Bodycomponent);
