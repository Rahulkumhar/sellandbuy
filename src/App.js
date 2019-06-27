import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './routes';
import 'antd/dist/antd.css';


import './firebaseconfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dropdownOpen: false
      db : {
        products:[],  
    cart :[],
    page:1
      }


    };
  }

  componentDidMount(){
  }


  // toggle = () =>  {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  
  // }
  handleAddFavorite = (e) => {  
   // var fav = this.state.productdb.filter((data) => data.productId===e).map((data) => (data.favourite))
    this.setState({
      
    })
  }


 
  render() {
    console.log('a',this.state.db);
    
    return (
      <Router productdb={this.state.db}/> 
    );
  }
}


export default App;