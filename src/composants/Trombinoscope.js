import React from 'react';
import ReactDOM from 'react-dom';

import Musicien from './Musicien';

const Trombinoscope = (props) => {
   
    //const {liste, nomClasse} = props;
    const liste = props.data;
    const nomClasse = props.nomClasse;
    const suffixeAleatoire = () => new Date().getTime()+"_"+(Math.random()+1).toString(36).substring(2,12);

    return (
        <article className={nomClasse}>
        {liste.map(x => {
            return <Musicien 
            key={`id_${suffixeAleatoire()}`}
            genre={x.gender}
            titre={x.title}
            nom={x.name.last}
            prenom={x.name.first}
            dob={x.dob.date.slice(0,10)}
            nationalite={x.nat}
            courriel={x.email}
            portable={x.cell}
            telephone={x.phone}
            ville={x.location.city}
            pays={x.location.country}
            identifiant={x.id.value}
            portrait={x.picture.large}
                />
        })
        }
        </article>
    )
};
export default Trombinoscope;
