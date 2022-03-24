import React, {Component} from 'react';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            edad : this.props.edad
        };
    }

    render(){
        return (
            <div>
                <h1>{this.props.apellido}, {this.props.nombre}</h1>
                <p>Age: {this.state.edad}</p>
                <p>Hair color: {this.props.color}</p>     
                <button onClick={ () => {this.setState({edad:this.state.edad+1}) }}>Birthday button!!</button>                                         
            </div>
        );
    }
}

export default User;
