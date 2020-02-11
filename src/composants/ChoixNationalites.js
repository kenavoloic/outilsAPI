import React from 'react';
import ReactDOM from 'react-dom';
import Poussoir from './Poussoir';


class ChoixNationalites extends React.Component {
    constructor(props){
        super(props);
        //console.log(props.data);
        this.state = {
            liste: props.data
        }
    }

    boitesAcocher = (liste, fonction) => {
        return Array.from(liste).map(x => <Poussoir data={x} fonction={fonction} />);       
    }

    modification = e => {
        console.log(this.state);
        //console.log("name ", e.name, "OnOff ", e.selectionne);
        //this.setState({liste[e.name]: e.selectionne});
    }

    render(){
        //console.log(this.state.liste);
        return (
            <details className="pays">
            <summary>Nationalités</summary>
            <article className="nations">
            {this.boitesAcocher(this.state.liste, this.modification)}
            </article>
            </details>
        );
    }
}


export default ChoixNationalites;
