import React from 'react';
import ReactDOM from 'react-dom';

class Boite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clef: props.data.clef,
            nationalite: props.data.nationalite,
            selectionne: props.data.booleen
        }
    }

    alternateur = e => {
        //this.setState(precedent => ({selectionne: precedent
        //this.setState({selectionne: !e.target.selectionne});
        this.setState({selectionne: !this.state.selectionne});
        this.props.fonction(this.props.numero, e);
        //this.setState( precedent => 
        //console.log(e.target.name, e.target.checked);
        //this.props.fonction(this.props.numero, e);
    }

    render(){            
        return (
            <React.Fragment>
            <label htmlFor={this.state.clef}>{this.state.nationalite}</label>
            <input type="checkbox"
            name={this.state.clef}
            key={this.state.clef}
            checked={this.state.selectionne}
            //value = {this.state.selectionne}
            onChange={this.alternateur}
            />
            </React.Fragment>
        );
    }
}


export default Boite;
