import React,{Component} from 'react';

class Aynundetail extends Component{
    constructor(){
        super();
        this.state = {
            detail:"Click me For know detail about Aynun!"
        }
    }
    details(){
        this.setState ({
            detail : "Hi this is Aynun daughter of Ashraf and Rashmi"
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.detail }</h1>
                <button onClick={()=>this.details()}>Details</button>
            </div>
        )
    }
}

export default Aynundetail;