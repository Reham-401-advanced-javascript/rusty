import React from 'react';
import ReactJson from 'react-json-view';
import '../main/main.scss';


function Results (props){
  if (props.response.Headers) {
    return (
      <section>
        <ReactJson  src= {props.response} />
        <ReactJson  src={props.headers}/>
      </section>
    );
  }else return <section></section>;
}
export default Results;