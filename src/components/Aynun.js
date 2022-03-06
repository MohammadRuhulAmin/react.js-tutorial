import React,{Component} from 'react';

class Aynun extends Component{
    constructor(){
        super();
        this.state ={
            message:"What is your full name Aynun ?? "
        } 
    }
    changeMesage(){
        this.setState({
            message:'My Name is Aynun Jariya Mariyam Binte Ashraf!',
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.changeMesage()}>Click Me to Learn More </button>
            </div>
        )
    }
}
export default Aynun;