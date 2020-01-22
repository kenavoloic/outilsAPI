import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Application.css';
import Musicien from './Musicien';
import Entete from './Entete';
import BasDePage from './BasDePage';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            nombre: 30,
            liste: [],
            telechargementEnCours:false,
        }

    }

    getLien = (nombre, seed="randomuser") => {
        const lien = 'https://randomuser.me/api/';
        seed = `?seed=${seed};`
        const nationalites = 'nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us';
        const champs = 'exc=login,registered';
        //const champs= "inc=gender,name,dob,email,nat,location,id,picture";
        const resultats = `results=${nombre}`;
        let retour = `${lien}${seed}&${resultats}&${champs}&${nationalites}`;
        return retour;
    };

    componentDidMount = () => {
        this.setState({telechargementEnCours:true});
        fetch(this.getLien(this.state.nombre))
            .then(r => r.json())
            .then(r => {
                this.setState({
                    telechargementEnCours: true,
                    liste: r.results
                })
            },
                (erreur) => {
                    this.setState({
                        telechargementEnCours: true,
                        erreur
                    });
                }
            )
    }
    
    suffixeAleatoire = () => new Date().getTime()+"_"+(Math.random()+1).toString(36).substring(2,12);

    render() {
        const {erreur, telechargementEnCours, liste } = this.state;

        if(erreur){
            return <div>Erreur: {erreur.message}</div>;
        } else if (!telechargementEnCours) {
            return <div>Téléchargement en cours…</div>;
        } else {                
            return (
                <React.Fragment>
                <Entete />
                <div className="grilleMusiciens">
                {liste.map(x => {
                    return <Musicien key={'k_'+this.suffixeAleatoire()} 
                    genre={x.gender} titre={x.title} nom={x.name.last} prenom={x.name.first} dob={x.dob.date.slice(0,10)} nationalite={x.nat} courriel={x.email} portable={x.cell} telephone={x.phone} ville={x.location.city} pays={x.location.country} identifiant={x.id.value} portrait={x.picture.large} />
                }
                )}
                </div>
                </React.Fragment>

            );
            
        }
    }

    //formatNombre = (nombre, nbZero=3) => String(nombre).padStart(nbZero,'0');

    componentDidCatch = (erreur, info) =>{
        console.log(erreur.message);
    }
}

export default Application;
