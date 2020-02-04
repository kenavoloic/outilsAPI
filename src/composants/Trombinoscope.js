import React from 'react';
import ReactDOM from 'react-dom';

import Musicien from './Musicien';

const Trombinoscope = (props) => {

    const liste = props.data;
    const abbreviation = props.abbreviation;
    const libelle = props.libelle;

    const nomClasse = props.nomClasse;
    const suffixeAleatoire = () => new Date().getTime()+"_"+(Math.random()+1).toString(36).substring(2,12);

    const conservatoire = x => {
        return <Musicien 
        abbreviation  = {abbreviation}
        libelle = {libelle}
        genre = {x.genre}
        nom = {x.nom}
        prenom = {x.prenom}
        titre = {x.titre}
        ville = {x.ville}
        pays = {x.pays}
        courriel = {x.courriel}
        dob = {x.dob}
        telephone = {x.telephone}
        portable = {x.portable}
        nationalite = {x.nationalite}
        portrait = {x.portrait}
        identifiant = {x.identifiant}
        key = {x.identifiant}
        />
    }

    const _conservatoire = x => {
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
