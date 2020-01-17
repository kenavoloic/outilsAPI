import React from 'react';

//import {Card, Image, ListGroup} from 'react-bootstrap';

import { add as dfAdd, format as dfFormat, formatDistance as dfFormatDistance, formatDistanceStrict as dfFormatDistanceStrict, formatDistanceToNow as dfFormatDistanceToNow} from 'date-fns';
import { fr as dfFr} from 'date-fns/locale';


const Musicien = props => {

    const setEmbauche = majorite => {
        let maintenant = new Date();
        let jourEmbauche = new Date(majorite.getTime() + Math.random() * (maintenant.getTime() - majorite.getTime()));
        return jourEmbauche;
    };

    const depuisQuand = dateEmbauche => {
        let depuis = dfFormatDistanceStrict(dateEmbauche, new Date(), {unit:'year', locale:dfFr});
        return (depuis === "0 ans" ) ? " Moins d'un an" : depuis;
    };

    const jourMoisAnnee = date => dfFormat(new Date(date), "d MMMM yyyy", {locale: dfFr});

    const dateMajorite = objetDate => dfAdd(objetDate, {years:18});

    const formatNombre = (nombre, nbZero=2) => String(nombre).padStart(nbZero,'0');

    let genre = (props.genre.toLowerCase() === 'f' || props.genre.toLowerCase() === 'female') ? 'f':'h';
    let titre = props.titre;
    let dob = props.dob;
    let nom = props.nom;
    let prenom = props.prenom;
    let nationalite = props.nationalite;
    let courriel = props.courriel;
    let telephone = props.telephone;
    let portable = props.portable;
    let ville = props.ville;
    let portrait = props.portrait;
    let identifiant = props.identifiant;
    
    let dnat = new Date(dob);
    let dnatChaine = jourMoisAnnee(dnat);
    let ageChaine = depuisQuand(dnat);
    let majorite = dateMajorite(dnat);
    let majoriteChaine = jourMoisAnnee(majorite);
    let embauche = setEmbauche(majorite);
    let embaucheChaine = jourMoisAnnee(embauche);
    let ancienneteChaine = depuisQuand(embauche);
    let couleurGenre = ( genre === 'f') ? 'couleurFemme' : 'couleurHomme';
    let nomClasse = "musicien";

    return (
        <article className={nomClasse}>
        <h1 className={couleurGenre}>{prenom} {nom}</h1>
        <img src={portrait} alt={nom} />
        <ul>
        <li className="age">{ageChaine}</li>
        <li className="anciennete">{ancienneteChaine}</li>
        <li className="telephone">{telephone}</li>
        <li className="portable">{portable}</li>
        <li className="courriel">{courriel}</li>
        <li className="ville">{ville}</li>
        <li className="nationalite">{nationalite}</li>
        </ul>
        </article>
    );

}

export default Musicien;
