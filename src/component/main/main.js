import React from 'react';
import './main.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if ( this.state.url && this.state.method ) {

      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      console.log('rrrrrrrrrrrrrrrr',request);
      // Clear old settings
      let url = '';
      let method = '';

      this.setState({request, url, method});
      // e.target.reset();

    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    // console.log('hhhgg',e);
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <section>
        <form id='form' onSubmit={this.handleSubmit}>
          <label >
            <span >URL: </span>
            <input name='url' id='url' type='text' onChange={this.handleChangeURL} />
            <button id="goButton" type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
      </section>
    );
  }
}

export default Form;
  