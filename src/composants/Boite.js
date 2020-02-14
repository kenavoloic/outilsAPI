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
        this.setState({selectionne: !this.state.selectionne});
        this.props.fonction(this.props.numero, e);
    }

    render(){            
        return (
            <section>
            <label htmlFor={this.state.clef}>{this.state.nationalite}</label>
            <input type="checkbox"
            name={this.state.clef}
            key={this.state.clef}
            checked={this.state.selectionne}
            onChange={this.alternateur}
            />
            </section>
        );
    }
}


export default Boite;
