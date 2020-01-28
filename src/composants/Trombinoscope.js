import React from 'react';
import ReactDOM from 'react-dom';

import Musicien from './Musicien';
/*
class Trombinoscope extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liste: this.props.data
        }
        this.nomClasse = this.props.nomClasse;        
    }

    suffixeAleatoire = () => new Date().getTime()+"_"+(Math.random()+1).toString(36).substring(2,12);

    conservatoire = x => {
        return <Musicien
        key={`id_${suffixeAleatoire()}`}
        identifiant = {x.id.value}
        titre = {x.title} genre = {x.gender}  nom = {x.name.last} prenom = {x.name.first}
        dob = {x.dob.date.slice(0,10)} nationalite = {x.nat}
        courriel = {x.email} portable = {x.cell} telephone = {x.phone}
        ville = {x.location.city} pays = {x.location.country}
        portrait = {x.picture.large}
            />    
    };

    componentDidMount(){       
        
    }

    render(){
        const {liste} = this.state;
        return(
            <article className={this.nomClasse}>
            {liste.map(this.conservatoire)}
            </article>
        );
    }
}
*/

const Trombinoscope = (props) => {

    const liste = props.data;
    const abbreviation = liste.abbreviation;
    const libelle = liste.libelle;

    const nomClasse = props.nomClasse;
    const suffixeAleatoire = () => new Date().getTime()+"_"+(Math.random()+1).toString(36).substring(2,12);

    const conservatoire = x => {
        return <Musicien
        key={`id_${suffixeAleatoire()}`}
        identifiant = {x.id.value}
        titre = {x.title} genre = {x.gender}  nom = {x.name.last} prenom = {x.name.first}
        dob = {x.dob.date.slice(0,10)} nationalite = {x.nat}
        courriel = {x.email} portable = {x.cell} telephone = {x.phone}
        ville = {x.location.city} pays = {x.location.country}
        portrait = {x.picture.large}
        abbreviation = {abbreviation}
        libelle = {libelle}
            />    
    };

    return (
        <article className={nomClasse}>
        {liste.map(conservatoire)}
        </article>
    );
};

export default Trombinoscope;
