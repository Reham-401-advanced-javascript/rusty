import React from 'react';
import './main.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
    };
  }

  handleSubmit = async e => {

    e.preventDefault();
    e.target.reset();

    if (this.state.url && this.state.method) {
      const url = this.state.url;
      const method = this.state.method;
      const raw = await fetch(url,{method: method} );
      const data = await raw.json();
      // console.log('raaaaaaaaaaaaw', raw);
      // const results = data.results.reduce((list, person) => {
      //   list.push({ name: person.name, url: person.url });
      //   return list;
      // }, []);
      // this.props.update(raw.headers, data)
      this.props.update(data)

    } else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    // console.log('hhhgg',e);
    const url = e.target.value;
    this.setState({ url });
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };
  // handleDelete = (deletedPerson) => {
  //   console.log(deletedPerson.name);
  //   const filterd = this.state.filter((person) => {
  //     return person.name !== deletedPerson.name;
  //   });
  //   this.setState({ url: filterd });
  // };

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

      </section>
    );
  }
}




export default Form;
