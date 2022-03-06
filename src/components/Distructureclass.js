import React,{Component} from 'react';

class Distructureclass extends Component{
    render(){
        const {name,email} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>Go the Gizz!</h1>
            </div>
        )
    }
}

export default Distructureclass;