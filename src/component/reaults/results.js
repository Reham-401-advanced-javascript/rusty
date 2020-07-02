import React from 'react';
import ReactJson from 'react-json-view';
import '../main/main.scss';


function Results (props){
  // console.log('ffffffffffffffffffff',props);
  if (props.response.Headers) {
    return (
      <section>
        <ReactJson  src= {props.response} />
      </section>
    );
  }else return <section></section>;
}
export default Results;