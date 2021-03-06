import React from 'react';
import ReactDOM from 'react-dom';

import Choix from './Choix';
import listeOrchestrale from './listeOrchestrale';

import ChoixNationalites from './ChoixNationalites';
import ListePays from './ListePays';

import Genres from './Genres';

import Trombinoscope from './Trombinoscope';

class Formulaire extends React.Component {
    constructor(props){
      super(props);

      /* let xyz = new ListePays().toutes();
       * console.log(xyz.eu); */
      
        
        this.state = {
            abbreviation: '',
            libelle: '',
            nombrePostulants: 4,
            seed: 'MauriceGarin',
            telechargementEnCours: false,
            liste: [],
            erreur: '',
            url: 'https://randomuser.me/api/?',
            nationalites: 'nat=fr',
            genres: 'gender=female,male',
            champsExclus: 'exc=login,registered',
            boutonSauvegarde:false,
          listePays: new ListePays().getListeFr(),
	  toutes: new ListePays().toutes()
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

    requeteNationalites = envoi => {
        if(envoi != this.state.nationalites){
            this.setState({nationalites: `nat=${envoi}`});
        }
    }

    requeteGenres = envoi => {
            this.setState({genres: `gender=${envoi}`})
    }

    componentDidUpdate = () => {
    }


    getLien = () => {
        let resultats = `results=${this.state.nombrePostulants}`;
        let alea = `seed=${this.state.seed}`;
        let lien = `${this.state.url}${alea}&${resultats}&${this.state.champsExclus}&${this.state.nationalites}&${this.state.genres}`;
        //let lien = `${this.state.url}${alea}&${resultats}&${this.state.genres}&${this.state.nationalites}`;
        //let lien = `${this.state.url}${alea}&${resultats}&${this.state.genres}`;
        //console.log(lien);
        return lien;    
    }

    filtreRandomUser = x => {
        return {
            genre: (x.gender.toLowerCase() === "male") ? 'h' : 'f',
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
          <>
          <form className="enteteFormulaire" onSubmit={this.obtenirDonnees} className={this.props.nomClasse}>

          <Choix data={listeOrchestrale} name="instrument" actualisation={this.changementInstrument} required />

          <div className="labelInput">
          <label htmlFor="nombre">Nombre</label>
          <input name="nombrePostulants" type="number" min="1" max="100"  size="6" placeholder="Nombre" onChange={this.changement} value={this.state.nombrePostulants} required />
          </div>

          <div className="labelInput">
          <label htmlFor="seed">Aléa</label>
          <input name="seed" type="text" minLength="1" maxLength="32" placeholder="seed" onChange={this.changement} value={this.state.seed} required />
          </div>

          <ChoixNationalites
          //data={this.state.toutes}
          data={this.state.listePays}
          listes={this.state.toutes}
          fonction={this.requeteNationalites} />

          <Genres fonction={this.requeteGenres} />

          <button type="submit" disabled={!requetePossible}>Envoi</button>

          </form>

          <button id="enregistrer" onClick={this.sauvegarderJson} disabled={!sauvegardePossible}>Sauver</button>
          </>
        );
    }

}

export default Formulaire;
