
import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import {Greet3} from './components/Greet3';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
class App extends Component {
  render(){
    return(
      <div className='App'>
        <Welcome2/>
       <Greet/>
       <Greet2/>
       <Greet3/>
       <Welcome/>
      </div>
    )
  }
}
export default App;
