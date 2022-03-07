
import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import {Greet3} from './components/Greet3';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Actor from './components/Actor';
import Queen from './components/Queen';
import Message from './components/Message';
import Aynun from './components/Aynun';
import Aynundetail  from './components/Aynundetail';
import Counter from './components/Counter';
import Distructure from './components/Distructure';
import Distructureclass from './components/Distructureclass';
import FunctionClick from './components/FunctionClick';
import ClassClick  from './components/ClassClick';
import Myclass from './components/Myclass';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import Father from './components/Father';
import Ourfather from './components/Ourfather';
import UserGreeting from './components/UserGreeting';
import ConditionalRendering from './components/ConditionalRendering';
// import ListRendering from './components/ListRendering';
// import ListRenderingclass from './components/ListRenderingclass';
// import Person from './components/Person';
import Team from './components/Team';
class App extends Component {
  render(){
    return(
      <div className='App'>
        <Team/>
        {/* <Person/>
        <ListRenderingclass/>
        <ListRendering/> */}
        <ConditionalRendering/>
        <UserGreeting/>
        <Ourfather/>
        <Father/>
        <ParentComponent/>
        <Eventbind/>
        <Welcome2/>
        <Queen name="Aynun Jariya Mariyam Binte Ashraf " type="Queen" />
        <Actor name="Aynun Jariya " heroName = "Super Woman">
          <h1>HY Aynun is a Super Queen!</h1>
        </Actor>
       <Greet name="Ruhul Amin"/>
       <Greet2 name= "Aynun"/>
       <Greet3 name = "mariyam"/>
       <Welcome/>
       <Greet/>
       <Message/>
       <Aynun/>
       <Aynundetail/>
       <Counter/>
       <Distructure name="Ruhul Amin" email="ruhulamin.cs.dev@gmail.com"/>
       <Distructureclass name="Aynun Jariya Mariyam" email="Mariam@gmail.com"/>
       <FunctionClick/>
       <ClassClick/>
        <Myclass/>
      </div>
    )
  }
}
export default App;
