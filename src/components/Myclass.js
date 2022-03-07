import React,{Component} from 'react';
class Myclass extends Component{
    constructor(){
        super();
        this.state = {
            message :'Hi this is Aynun Jariya Mariyam Binte Ashraf'
        }
    }
    details(){
       this.setState({
           message:'HYEEE!'
       })
    }

    about(){
        console.log("This is About Me!");
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.details()}> Click For Details  </button>
                <button onClick = {this.about}> HII  </button>
            </div>
        );

    }




}

export default Myclass;