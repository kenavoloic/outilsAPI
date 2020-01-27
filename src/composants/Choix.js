import React from 'react';
import ReactDOM from 'react-dom';
import './Application.css';

class Choix extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ouvert: true,
            options: this.props.data,
            abbreviation: '',
            libelle: ''
        }
    }


    componentDidUpdate(){
    }

    componentWillUnmoun(){
    }


    creationItem = item => (
        <li className="selecteurItem"
        key={item.abbreviation} 
        value={item.abbreviation} 
        disabled={item.disabled} 
        onClick={() => this.optionChoisie(item.abbreviation, item.libelle)}>
        {item.libelle} 
        </li>
    );

    creationSelecteur = data => {
        let liste = data.map(x => {
            let groupe = x.groupe;
            let items = x.items;
            let retour = (
                <details className="detailsGroupe"key={groupe.toLowerCase()}>
                <summary>{groupe}</summary>
                <ul>
                {items.map(this.creationItem)}
                </ul>
                </details>
            );
            return retour;
        });
        return liste;
    }

    optionChoisie(abbreviation, libelle){
        //this.setState({open: false}, this.props.actualisation(abbreviation, libelle));
        this.setState({ouvert: false, abbreviation: abbreviation, libelle: libelle});
    }

    ouverture = envoi =>  envoi ? open : '';


    render(){
        return (
            <details className="selecteur" key="selecteur" value={this.ouverture()}>
            <summary>{this.state.libelle ? this.state.libelle : 'Instruments'}</summary>
            <article className="cadreSelecteur">
            {this.creationSelecteur(this.state.options)}
            </article>
            </details>
        );

    }
}

export default Choix;
