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
        console.log(e.target.name, e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    changementInstrument = e => {
       console.log(e.target.options[e.target.selectedIndex]); 
        //console.log(e.target.value, e.target.options[e.target.selectedIndex].dataset.libelle);
        this.setState({
            abbreviation: e.target.value,
            libelle: e.target.options[e.target.selectedIndex].dataset.libelle
        });
    }

    componentDidUpdate = () => {
        //console.log(this.state.abbreviation, this.state.libelle, this.state.seed, this.state.nombrePostulants);
    }

    getLien = () => {
        let resultats = `results=${this.state.nombrePostulants}`;
        let alea = `?seed=${this.state.seed}`;
        let lien = `${this.state.url}${alea}&${resultats}&${this.state.champsExclus}&${this.state.nationalites}`;
        return lien;    
    }

    getDonnees = e => {
        e.preventDefault();
        this.setState({boutonSauvegarde: true}); // à supprimer par la suite
        //console.log(this.state.posteApourvoir, this.getLien());
        let data = new FormData(e.target);
        //console.log(e.target);
        fetch(this.getLien())
        .then(r => r.json())
        .then(r => {
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


    // doit renvoyer la liste à la classe parente qui va créer une instance de trombinoscope
    // il faut donc supprimer la classe ENTETE qui ne sert plus à rien
    //
    getTrombinoscope = (liste, nomClasse="trombinoscope") => {
        if(liste){
            return (
                <Trombinoscope data={liste} nomClasse={nomClasse} />
            )
        }
    }


    render(){
        return (
            <nav className="barre">
            <form onSubmit={this.getDonnees} className={this.props.nomClasse}>

            <Choix data={listeOrchestrale} name="instrument" onChange={this.changementInstrument} required />
            
            <label htmlFor="nombre">Nombre</label>
            <input name="nombrePostulants" type="number" min="1" max="100"  size="6" placeholder="Nombre" onChange={this.changement} value={this.state.nombrePostulants} required />
            
            <label htmlFor="seed">Seed</label>
            <input name="seed" type="text" minLength="1" maxLength="32" placeholder="seed" onChange={this.changement} value={this.state.seed} required />
            
            <button type="submit">Envoi</button>
            
            </form>
            <button onClick={this.sauvegarderJson} disabled={!this.state.boutonSauvegarde}>Enregistrer</button>
            </nav>
        );
    }

}

export default Formulaire;
