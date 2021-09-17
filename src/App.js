import React from "react";
import "./App.css";
// import ReactDOM  from "react-dom";

class App extends React.Component {
  constructor() {
    super()
    this.state={counter:0}
    this.increase = this.increase.bind(this);
  }
  
  increase()
  {
    this.setState(prevState=>{
      return{counter: prevState.counter+1}
    })
    console.log(this.state.counter)
  }

  componentDidUpdate()
  {
    console.log(this.state.counter)
  }

  decrease = ()=>{
    if(this.state.counter>0){
      this.setState(prevState=>{
      return{counter: prevState.counter-1}
    })
    }
  }
  reset = ()=> {
    this.setState({counter: 0})
  }


  render(){
    return(
      <>
      <div className="container">
        <div className="innerContainer">
          <h2>Counter App</h2>
          <input type="text" id="counterValue" disabled value={this.state.counter}></input>
          <div className="buttonClass">
            <div><button onClick={this.increase}>+</button></div>
            <div><button onClick={this.decrease}>-</button></div>
          </div>
          <div className="reset" onClick={this.reset}><button>Reset</button></div>
        </div>
      </div>
      </>
    )
  }
}

export default App;