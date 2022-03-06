import React,{Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            value:0
        }
    }
    increment(){
        this.setState({
            value:this.state.value+1
        })
    }
    decrement(){
        this.setState({
            value:this.state.value-1
        })
    }
    incByTwo(){
        this.setState({
            value: this.state.value* 2
        })
    }
    render(){

        return(
            <div>
                
                <button onClick={()=>this.increment()}>+</button>
                <h1>{this.state.value}</h1>
                <button onClick={()=>this.decrement()}>-</button>
                <button onClick={()=>this.incByTwo()}>Increment By Two </button>
                
            </div>
        )
    }


}

export default Counter;