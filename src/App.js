
import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import {Greet3} from './components/Greet3';
class App extends Component {
  render(){
    return(
      <div className='App'>
       <Greet/>
       <Greet2/>
       <Greet3/>
      </div>
    )
  }
}

export default App;
