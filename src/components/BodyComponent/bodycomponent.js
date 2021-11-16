import React, { Component } from "react";
import "./bodycomponent.css";
import Button from "../reuseablecomponents/button";

class Bodycomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: "",
      operand: "",
      sumofoperation: "",
      operator: "",
      upperdisplay: "",
      lowerdisplay: "",
    };
  }
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        lowerdisplay: (eval(this.state.lowerdisplay) || "") + "",
      });
    } catch (e) {
      this.setState({
        lowerdisplay: "error",
      });
    }
  };
  clear = () => {
    this.setState({
      history: "",
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
  add = (event) => {
    let value = event.target.value;
    if (value == "=") {
      let splittedValue = this.state.upperdisplay.split(this.state.operator);
      let length = splittedValue.length;
     
      if (this.state.operator == "+") {
        let totalplus = 0;
        splittedValue.map((a) => {
          if (Number(a)) {
            let num = Number(a);
            totalplus += num;
          }
          this.setState({ lowerdisplay: totalplus });
        });
      }
      if (this.state.operator == "-") {
        let totalminus = 0
        splittedValue.map((a) => {
          if (Number(a)) {
            let num = Number(a);
            totalminus -= num 
          }
          this.setState({ lowerdisplay: totalminus });
        });
      }
      if (this.state.operator == "*") {
        let totalmul = 1;
        splittedValue.map((a) => {
          if (Number(a)) {
            let num = Number(a);
            totalmul *= num;
          }
          this.setState({ lowerdisplay: totalmul });
        });
      }
      if (this.state.operator == "%") {
        let totaldiv = 1;
        splittedValue.map((a) => {
          if (Number(a)) {
            let num = Number(a);
            totaldiv %= num;
          }
          this.setState({ lowerdisplay: totaldiv });
        });
      }
      if (this.state.operator == "/") {
        let totaldiv = 1;
        splittedValue.map((a) => {
          if (Number(a)) {
            let num = Number(a);
            totaldiv /= num;
          }
          this.setState({ lowerdisplay: totaldiv });
        });
      }
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
      value == "/"
    ) {
      this.setState({ upperdisplay: this.state.upperdisplay + value });
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
          <div className="row shadow p-2">
            {arr.map((value) => {
              return (
                <div className="col-3">
                  <Button
                    className="btn btn-grey col-12 mt-2"
                    value={value}
                    handleClick={(event) => this.add(event)}
                    btnText={value}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Bodycomponent;
