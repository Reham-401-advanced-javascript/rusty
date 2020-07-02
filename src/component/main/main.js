import React from 'react';
import './main.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
      results:[],
    };
  }

  handleSubmit = async e => {

    e.preventDefault();
    e.target.reset();
    
    if (this.state.url && this.state.method) {
      let url = this.state.url;
      let method = this.state.method || 'get';
      const raw = await fetch(url,{method: method} );
      const data = await raw.json();
      let head ;
      raw.headers.forEach(value =>{
        head = { 'Content-Type': value };
      });  
      let results = {
        Headers: head,
        Response: data,
      };  
      url = await '';
      method =await '';   
      await this.setState({results, url, method});
      // console.log('raaaaaaaaaaaaw', raw);
      // const results = data.results.reduce((list, person) => {
      //   list.push({ name: person.name, url: person.url });
      //   return list;
      // }, []);
      // this.props.update(raw.headers, data)
      await this.props.update(results);

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
