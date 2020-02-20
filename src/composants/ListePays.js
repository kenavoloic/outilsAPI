const ListePays = function(){

    const liste = [
        {clef: "au", nationalite: 'AU', booleen: false},
        {clef: "br", nationalite: 'BR', booleen: false},
        {clef: "ca", nationalite: 'CA', booleen: false},
        {clef: "ch", nationalite: 'CH', booleen: false},
        {clef: "de", nationalite: 'DE', booleen: false},
        {clef: "dk", nationalite: 'DK', booleen: false},
        {clef: "es", nationalite: 'ES', booleen: false},
        {clef: "fi", nationalite: 'FI', booleen: false},
        {clef: "fr", nationalite: 'FR', booleen: false},
        {clef: "gb", nationalite: 'GB', booleen: false},
        {clef: "ie", nationalite: 'IE', booleen: false},
        {clef: "ir", nationalite: 'IR', booleen: false},
        {clef: "no", nationalite: 'NO', booleen: false},
        {clef: "nl", nationalite: 'NL', booleen: false},
        {clef: "nz", nationalite: 'NZ', booleen: false},
        {clef: "tr", nationalite: 'TR', booleen: false},
        {clef: "us", nationalite: 'US', booleen: false}
    ];

    const eu = ['au', 'de', 'dk', 'es', 'fi', 'fr', 'gb', 'ie', 'nl'];
    const nonEU = ['br', 'ca', 'ch', 'ir', 'no', 'nz', 'tr', 'us'];
    const americas = ['br','ca','us'];
    const europe = ['au','ch','de','dk','es','fi','fr','gb','ie','no','tr'];

    //const listeEU = {...liste};
    //const listeNonEU = {...liste};
    //const listeEU = Object.assign({}, liste);
    //const listeNonEU = Object.assign({}, liste);
    //Seule méthode de clonage qui fonctionne.
    //Danger : si les objets contenaient des méthodes, la copie serait incomplète.
    const listeComplete = JSON.parse(JSON.stringify(liste));
    const listeEU = JSON.parse(JSON.stringify(liste));
    const listeNonEU = JSON.parse(JSON.stringify(liste));
    const listeAmeriques = JSON.parse(JSON.stringify(liste));
    const listeEurope = JSON.parse(JSON.stringify(liste));

    listeComplete.forEach(x => x.booleen = true);

    listeEU.forEach(x => {
        if(eu.indexOf(x.clef) > -1){
            x.booleen = true;
        }
    });

    listeNonEU.forEach(x => {
        if(nonEU.indexOf(x.clef) > -1){
            x.booleen = true;
        }
    });

    listeAmeriques.forEach(x => {
        if(americas.indexOf(x.clef) > -1){
            x.booleen = true;
        }
    });

    listeEurope.forEach(x => {
        if(europe.indexOf(x.clef) > -1){
            x.booleen = true;
        }
    });

    const getListe = () => listeComplete;
    const getListeEU = () => listeEU;
    const getListeNonEU = () => listeNonEU;
    const getListeAmeriques = () => listeAmeriques;
  const getListeEurope = () => listeEurope;

  const toutes = () => {
    return {
      'complete': ['Tous', getListe()],
      'eu': ['EU', getListeEU()],
      'noneu': ['Non-EU',getListeNonEU()],
      'ameriques': ['Amériques', getListeAmeriques()],
      'europe': ['Europe', getListeEurope()]      
    };
  };

  return {getListe, getListeEU, getListeNonEU, getListeAmeriques, getListeEurope, toutes};

};

export default ListePays;

//let a = new ListePays();
//console.log('liste : ', a.getListe(), 'listeEU : ', a.getListeEU(), 'listeNonEU : ', a.getListeNonEU());
//console.log(a.getListeAmeriques());
//console.log('Complète ', a.getListe());
//console.log('EU ', a.getListeEU());

