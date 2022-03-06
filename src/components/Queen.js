import React,{Component} from 'react';

class Queen extends Component{

    render(props){
        return(
            <div>
                <h1>{this.props.name} is a {this.props.type}</h1>
            </div>
        )
    }
}
export default Queen;
