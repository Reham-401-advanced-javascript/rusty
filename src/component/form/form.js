import React from 'react';
import { If, Then, Else } from '../if/if';
import './form.scss';

class Form extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
      results:[],
      history : [],
      active:false,
      body:'',
    };
    //   if(!JSON.parse(localStorage.getItem('history'))){
    //     localStorage.setItem('history', JSON.stringify(this.history));
    //   }
      
  }

  handleSubmit = async e => {

    e.preventDefault();
    this.props.toggleLoading();
    // e.target.reset();
    try{
      const url = '';
      const method = '';
      e.target.reset();
      switch(this.state.method){
      case 'get':
        console.log('get');
        await this.getHandler(e);
        break;
      case 'post':
      case 'put':
        console.log('post');
        await this.postAndPutHandler(e);
        break;
      case 'delete':
        console.log('delete');
        await this.deleteHandler(e);
        break;
      default:
        await this.getHandler(e);
      }
      let local=JSON.parse(localStorage.getItem('history'));
      //   console.log('looooooooocal',local);
      if(local===null){
        let histArr=[];
        let obj={method:this.state.method, url:this.state.url};
        histArr.push(obj);
        localStorage.setItem('history', JSON.stringify(histArr));
      }else{
        let obj={method:this.state.method, url:this.state.url};
        local.push(obj);
        localStorage.setItem('history', JSON.stringify(local));
  
      }
      this.props.toggleLoading();
      this.setState({url, method});
      // console.log(e.target.value);
    }catch(err){
      console.log(err);
    }
    
    
    
  }

  getHandler=async(e)=>{

    if (this.state.url && this.state.method) {
      let url = this.state.url;
      let method = this.state.method ;
  
      const raw = await fetch(url);
      const data = await raw.json();
      let head ;
      raw.headers.forEach(value =>{
        head = { 'Content-Type': value };
      });  
      let results = {
        Headers: head,
        Response: data,
      };  
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      //   let local=JSON.parse(localStorage.getItem('history'));
      //   console.log('looooooooocal',local);
      //   if(local===null){
      //     let histArr=[];
      //     let obj={method:this.state.method, url:this.state.url};
      //     histArr.push(obj);
      //     localStorage.setItem('history', JSON.stringify(histArr));
      //   }else{
      //     let obj={method:this.state.method, url:this.state.url};
      //     local.push(obj);
      //     localStorage.setItem('history', JSON.stringify(local));
  
      //   }
       
      await this.setState({results, url, method,request});
      //   //   this.history = JSON.parse(localStorage.getItem('history'))||[];
      //   //   //   console.log('sssssssssssssssssssssss',url,method);
      //   //   this.history.push({url, method});
      //   //   localStorage.setItem('history', JSON.stringify(this.history));
      //   url = await '';
      //   method =await ''; 
      await this.props.update(results);
        
       
    } else {
      alert('missing information');
    }
  }
  handleChangeBody = (e) => {
    const body = e.target.value;
    this.setState({body});
  }
  handleChangeURL = e => {
    // console.log('hhhgg',e);
    const url = e.target.value;
    this.setState({ url });
  };

  activation = () => {
    switch (this.state.method) {
    case 'get':
      this.setState({ active: false });
      break;
    case 'post':
    case 'put':
      this.setState({ active: true });
      break;
    case 'delete':
      this.setState({ active: false });
      break;
    default:
      break;
    }


  };
  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
    this.activation();
    // this.setState({ request: '' });
    // this.setState({ url: '' });
    // this.setState({ results: '' });


  };
  postAndPutHandler = async (e) => {
    let url = this.state.url;
    let method = this.state.method ;
    // let body=this.state.body;
    let request = {
      url: this.state.url,
      method: this.state.method,
    };
    try{
      const options = {
        method: `${this.state.method}`.toUpperCase(),
        body: JSON.stringify(this.state.body),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //   console.log('oooooooooooooooooooooo',options.body);
      const rawApiData = await fetch(this.state.url, options);
      const jsonApiData = await rawApiData.json();
      await this.setState({ url, method,request});
      
      this.props.update(jsonApiData);
    }catch(err){
      console.log(err);
    }
  }

  deleteHandler = async (e) => {
    try{
      const options = {
        method: `${this.state.method}`.toUpperCase(),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const rawApiData = await fetch(this.state.url, options);
      const jsonApiData = await rawApiData.json();
      this.props.update(jsonApiData);
    }catch(err){
      console.log(err);
    }
  }
  
  
 
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
        <If condition={this.state.active}>
          <Then>
            <div id="body"><textarea  placeholder="Raw JSON Body" defaultValue={this.state.body}  name="requestBody" spellCheck="false" onChange={this.handleChangeBody} ></textarea></div>
          </Then>
          <Else>
            <div id="body"><textarea placeholder="Raw JSON Body" defaultValue={this.state.body}  name="requestBody" spellCheck="false" disabled></textarea></div>
          </Else>
        </If>
        <section className="results">
          <span className="method">{this.state.method}</span>
          <span className="url">{this.state.url}</span>
        </section>
      </section>
    );
  }
}




export default Form;
