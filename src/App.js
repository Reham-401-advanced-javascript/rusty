import React from 'react';
import {Route} from 'react-router-dom';
import Header from './component/header/header.js';
import Main from './component/form/form.js';
import Results from './component/reaults/results.js';
import History from './component/history/history.js';
import Footer from './component/footer/footer.js';



class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      loading: false,
    };
  }
   handleUpdate = (updated) =>{
     let header=updated.Headers;
     let response=updated.Response;

     this.setState({Headers:{header}, Response:{response}});

   }
   toggleLoading = () => {
     this.setState({ loading: !this.state.loading });
   }
   render(){
     return (
       <>
         <Header />
         <Route exact path='/'>
           <main>
             <Main  update={this.handleUpdate} toggleLoading={this.toggleLoading}/>
             <Results loading={this.state.loading} response={this.state} />
           </main>
         </Route>
         <Route exact path='/history'>
           <main>
             <History />
           </main>
         </Route>
        

         <Footer />

       </>
     );
   }
}
export default App;

