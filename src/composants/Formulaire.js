import React from 'react';
import ReactDOM from 'react-dom';

import Choix from './Choix';
import listeOrchestrale from './listeOrchestrale';
import Trombinoscope from './Trombinoscope';

class Formulaire extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            abbreviation: '',
            libelle: '',
            nombrePostulants: 12,
            seed: 'louisonBobet',
            telechargementEnCours: false,
            liste: [],
            listeMusiciens: [],
            erreur: '',
            url: 'https://randomuser.me/api/',
            nationalites: 'nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us',
            champsExclus: 'exc=login,registered',
            boutonSauvegarde:false
        }
    }

    changement = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    changementInstrument = e => {
        //console.log(e.target);
       //console.log(e.target.options[e.target.selectedIndex]); 
        //console.log(e.target.value, e.target.options[e.target.selectedIndex].dataset.libelle);
        /*
        this.setState({
            abbreviation: e.target.value,
            libelle: e.target.options[e.target.selectedIndex].dataset.libelle
        });
        */
        //this.setState({abbreviation: e.target.abbreviation, libelle: e.target.libelle});
    }

    componentDidUpdate = () => {
        //console.log(this.state.abbreviation, this.state.libelle, this.state.seed, this.state.nombrePostulants);
        //const {abbreviation, libelle, nombrePostulants, seed} = this.state;
/*    
       if(abbreviation && libelle && nombrePostulants && seed){
           this.setState({boutonEnvoi: true});
       }
*/
    }


    getLien = () => {
        let resultats = `results=${this.state.nombrePostulants}`;
        let alea = `?seed=${this.state.seed}`;
        let lien = `${this.state.url}${alea}&${resultats}&${this.state.champsExclus}&${this.state.nationalites}`;
        return lien;    
    }

    getDonnees = e => {
        e.preventDefault();
        let data = new FormData(e.target);
        fetch(this.getLien())
        .then(r => r.json())
        .then(r => {
            r.results['abbreviation'] = this.state.abbreviation;
            r.results['libelle'] = this.state.libelle;
            this.setState({liste: r.results})
            this.props.canalEnfantParent(this.state.liste);
        })

        //this.setState({telechargementEnCours: true});
    }

    sauvegarderJson = e => {
        this.setState({boutonSauvegarde: false});
        let tous = JSON.stringify([this.state.abbreviation, this.state.libelle, ...this.state.liste]);
        let blob = new Blob([tous], {type: "text/plain"});
        let url = URL.createObjectURL(blob);
        let lien = document.createElement('a');
        lien.download = `${this.state.abbreviation}_${this.state.nombrePostulants}_${this.state.seed}_${Date.now()}.json`;
        lien.href = url;
        lien.click();
    }


    actualisation = e => {
        this.setState({abbreviation: e.abbreviation, libelle: e.libelle});
    }

    render(){

        const {abbreviation, libelle, nombrePostulants, seed, liste} = this.state;
        const requetePossible = abbreviation && libelle && nombrePostulants && seed;
        const sauvegardePossible = liste.length > 0;

        return (
            <nav className="barre">
            <form onSubmit={this.getDonnees} className={this.props.nomClasse}>

            <Choix data={listeOrchestrale} name="instrument" actualisation={this.actualisation} required />
            
            <label htmlFor="nombre">Nombre</label>
            <input name="nombrePostulants" type="number" min="1" max="100"  size="6" placeholder="Nombre" onChange={this.changement} value={this.state.nombrePostulants} required />
            
            <label htmlFor="seed">Seed</label>
            <input name="seed" type="text" minLength="1" maxLength="32" placeholder="seed" onChange={this.changement} value={this.state.seed} required />
            
            <button type="submit" disabled={!requetePossible}>Envoi</button>
            
            </form>
            <button onClick={this.sauvegarderJson} disabled={!sauvegardePossible}>Enregistrer</button>
            </nav>
        );
    }

}

export default Formulaire;
