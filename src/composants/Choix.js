import React from 'react';
import ReactDOM from 'react-dom';


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
                <summary className="choix">{groupe}</summary>
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
        this.setState({ouvert: false, abbreviation: abbreviation, libelle: libelle}, this.props.actualisation({abbreviation: abbreviation, libelle: libelle}));
    }

    modificationSummary = libelle => {
        return libelle ? <summary className="actif"><span>{libelle}</span></summary> : <summary className="inactif"><span>Instruments</span></summary>;
    }


    render(){
       
        const ouvert = this.state.ouvert ? 'open' : '';

        return (
            <details className="selecteur" key="selecteur"  name="instrument" >
            {this.modificationSummary(this.state.libelle)}
            <article className="cadreSelecteur">
            {this.creationSelecteur(this.state.options)}
            </article>
            </details>
        );

    }
}

export default Choix;
