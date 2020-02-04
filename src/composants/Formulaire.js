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
            nombrePostulants: 2,
            seed: 'LouisonBobet',
            telechargementEnCours: false,
            liste: [],
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

    actualisation = e => {
        this.setState({abbreviation: e.abbreviation, libelle: e.libelle});
    }

    changementInstrument = e => {
        this.setState({abbreviation: e.abbreviation, libelle: e.libelle});
    }

    componentDidUpdate = () => {
    }


    getLien = () => {
        let resultats = `results=${this.state.nombrePostulants}`;
        let alea = `?seed=${this.state.seed}`;
        let lien = `${this.state.url}${alea}&${resultats}&${this.state.champsExclus}&${this.state.nationalites}`;
        return lien;    
    }

    filtreRandomUser = x => {
        return {
            genre: x.gender,
            nom: x.name.last,
            prenom: x.name.first,
            titre: x.name.title,
            ville: x.location.city,
            pays: x.location.country,
            courriel: x.email,
            dob: x.dob.date,
            telephone: x.phone,
            portable: x.cell,
            nationalite: x.nat,
            portrait: x.picture.large,
            identifiant: x.id.value ? x.id.value : `${x.name.last}_${x.name.first}_${x.dob.age}`
        };
    }

    obtenirDonnees = e => {
        e.preventDefault();
        let data = new FormData(e.target);
        let lien = this.getLien();
        fetch(lien)
        .then(r => r.json())
        .then(r => r.results.map(this.filtreRandomUser))
        .then(r => {
            this.setState({liste: r});
            this.props.canalEnfantParent(this.state.liste, this.state.abbreviation, this.state.libelle);
        });
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


    render(){

        const {abbreviation, libelle, nombrePostulants, seed, liste} = this.state;
        const requetePossible = abbreviation && libelle && nombrePostulants && seed;
        const sauvegardePossible = liste.length > 0;

        return (
            <nav className="barre">
            <form onSubmit={this.obtenirDonnees} className={this.props.nomClasse}>

            <Choix data={listeOrchestrale} name="instrument" actualisation={this.changementInstrument} required />
<div className="labelInput">
            <label htmlFor="nombre">Nombre</label>
            <input name="nombrePostulants" type="number" min="1" max="100"  size="6" placeholder="Nombre" onChange={this.changement} value={this.state.nombrePostulants} required />
</div>
            <div className="labelInput">
            <label htmlFor="seed">Seed</label>
            <input name="seed" type="text" minLength="1" maxLength="32" placeholder="seed" onChange={this.changement} value={this.state.seed} required />
            </div>
            
            <button type="submit" disabled={!requetePossible}>Envoi</button>
            
            </form>
            <button id="enregistrer" onClick={this.sauvegarderJson} disabled={!sauvegardePossible}>Enregistrer</button>
            </nav>
        );
    }

}

export default Formulaire;
