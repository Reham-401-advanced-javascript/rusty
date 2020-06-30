import React from 'react';
import Header from './component/header/header.js';
import Main from './component/main/main.js';
import Results from './component/reaults/results.js';

import Footer from './component/footer/footer.js';
import './App.scss';



class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
   handleUpdate = (updated) =>{
     // console.log('uppppppppppppppppp',updated);
     let Headers = {'Content-Type': 'application/json'};
     // this.setState({Headers:{headers}, Response:{updated}});
     this.setState({Headers, Response:{updated}});

   }
   render(){
     return (
       <>
         <Header />
         <Main  update={this.handleUpdate}/>
         <Results  response={this.state} headers={this.state.Headers}/>
         <Footer />

       </>
     );
   }
}
export default App;