import React from 'react';
import ReactJson from 'react-json-view';
import '../form/form.scss';


function Results (props){
  // console.log('ffffffffffffffffffff',props);
  if (props.response.Headers) {
    return (
      <div className={`loading-${props.loading}`}>

        <section>
          <ReactJson  src= {props.response} />
        </section>
      </div>
    );
  }else return <section></section>;
}
export default Results;