import React from 'react';
import './main.scss';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    handleChange = (e) => {
      const url = e.target.value;
      // this.setState = update the state + fire the render method
      this.setState({ url });
    };
    handleClick = (e) => {
      const word = this.state.url;
      this.setState({ word });
      // console.log('state',url);
  
    };
  
    methodClick = (e) => {
      // console.log('state',this.state);
      const method = e.target.value;
      this.setState({ method });
      // console.log(method);
    };
    render() {
      return (
        <main className="main">
          <div id="url">
            <h3>URL : </h3>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.handleClick}>GO!</button>
          </div>
          <div id="rest" >
            <button onClick={this.methodClick} value="GET">GET</button>
            <button onClick={this.methodClick} value="POST">POST</button>
            <button onClick={this.methodClick} value="PUT">PUT</button>
            <button onClick={this.methodClick} value="DELETE">DELETE</button>
          </div>
          <div id="result">
            <section>{this.state.method}</section>
            <section>{this.state.word}</section>
          </div>
  
        </main>
      );
    }
  }
  
export default Main;
  