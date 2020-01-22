import React from 'react';
import ReactDOM from 'react-dom';

import Choix from './Choix';
import listeOrchestrale from './listeOrchestrale';


class Formulaire extends React.Component {
    constructor(props){
        super(props);
        this.listeOrchestrale = listeOrchestrale;
        this.state = {
            value: 'chef',
            nombre: 12,
            seed: "louisonBobet"
        };

        this.choixInstrument = this.choixInstrument.bind(this);
        this.requete = this.requete.bind(this);
        this.quantiteRecrutement = this.quantiteRecrutement.bind(this);
        this.changementSeed = this.changementSeed.bind(this);
    }

    choixInstrument(e){
        this.setState({value: e.target.value});
    }

    requete(e){
        e.preventDefault();
        console.log(this.state);
    }

    quantiteRecrutement(e){
        //let nombreValide = parseInt(e.target.value, 10);
        this.setState({nombre: e.target.value});
    }

    changementSeed(e){
        this.setState({seed: e.target.value});
    }



    render(){
        return(
            <form onSubmit={this.requete} className="enteteFormulaire">
            <label>Instrument
            <Choix data={this.listeOrchestrale} onChange={this.choixInstrument}/>
            </label>
            <label>Nombre 
            <input type="text" value={this.state.nombre} onChange={this.quantiteRecrutement} />
            </label>
            <label>Seed 
            <input type="text" value={this.state.seed} onChange={this.changementSeed} />
            </label>
            <input type="submit" value="Valider" />
            </form>
        );
    }
}


export default Formulaire;
