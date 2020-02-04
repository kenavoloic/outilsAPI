import React from 'react';

import { add as dateFunctionsAdd, format as dateFunctionsFormat, formatDistance as dateFunctionsFormatDistance, formatDistanceStrict as dateFunctionsFormatDistanceStrict, formatDistanceToNow as dateFunctionsFormatDistanceToNow} from 'date-fns';
import { fr as dateFunctionsFr} from 'date-fns/locale';


const Musicien = props => {


    const setEmbauche = majorite => {
        let maintenant = new Date();
        let jourEmbauche = new Date(majorite.getTime() + Math.random() * (maintenant.getTime() - majorite.getTime()));
        return jourEmbauche;
    };

    const depuisQuand = dateEmbauche => {
        let depuis = dateFunctionsFormatDistanceStrict(dateEmbauche, new Date(), {unit:'year', locale:dateFunctionsFr});
        return (depuis === "0 ans" ) ? " Moins d’un an" : depuis;
    };

    const jourMoisAnnee = date => dateFunctionsFormat(new Date(date), "d MMMM yyyy", {locale: dateFunctionsFr});

    const dateMajorite = objetDate => dateFunctionsAdd(objetDate, {years:18});

    const formatNombre = (nombre, nbZero=2) => String(nombre).padStart(nbZero,'0');

    const longueurMaximum = 15;

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
    let abbreviation = props.abbreviation;
    let libelle = props.libelle;
    
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
    let clef = `${abbreviation}_${nom}_${prenom}`;

    const afficheInfo = () => {
        console.log(clef, nom, prenom); 
    };

    return (
        <article className={nomClasse} key={clef} onClick={afficheInfo}>
        <h1 className={couleurGenre}>{prenom} {nom}</h1>
        <img src={portrait} alt={nom} />
        <ul>
        <li className="libelle">{libelle}</li>
        <li className="age">{ageChaine}</li>
        <li className="anciennete">{ancienneteChaine}</li>
        <li className="telephone">{telephone}</li>
        <li className="portable">{portable}</li>
        {courriel.length > longueurMaximum ? <li className="courrielSimple">{courriel}</li> : <li className="courriel">{courriel}</li>}
        {ville.length > longueurMaximum ? <li className="villeSimple">{ville}</li> : <li className="ville">{ville}</li>}
        <li className="nationalite">{nationalite}</li>
        </ul>
        </article>
    );

}

export default Musicien;
