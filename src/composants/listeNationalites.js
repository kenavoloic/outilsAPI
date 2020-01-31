const listeNationalites = function(){

    const liste = {
        au: {nationalite: 'AU', booleen: false},
        br: {nationalite: 'BR', booleen: false},
        ca: {nationalite: 'CA', booleen: false},
        ch: {nationalite: 'CH', booleen: false},
        de: {nationalite: 'DE', booleen: false},
        dk: {nationalite: 'DK', booleen: false},
        es: {nationalite: 'ES', booleen: false},
        fi: {nationalite: 'FI', booleen: false},
        fr: {nationalite: 'FR', booleen: false},
        gb: {nationalite: 'GB', booleen: false},
        ie: {nationalite: 'IE', booleen: false},
        ir: {nationalite: 'IR', booleen: false},
        no: {nationalite: 'NO', booleen: false},
        nl: {nationalite: 'NL', booleen: false},
        nz: {nationalite: 'NZ', booleen: false},
        tr: {nationalite: 'TR', booleen: false},
        us: {nationalite: 'US', booleen: false}
    };

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

    Object.keys(listeComplete).forEach(x => listeComplete[x].booleen = true);
    eu.forEach(x => listeEU[x].booleen = true);
    nonEU.forEach(x => listeNonEU[x].booleen = true);
    americas.forEach(x => listeAmeriques[x].booleen = true);
    europe.forEach(x => listeEurope[x].booleen = true);

    const getListeEU = () => listeEU;
    const getListeNonEU = () => listeNonEU;
    const getListe = () => listeComplete;
    const getListeAmeriques = () => listeAmeriques;
    const getListeEurope = () => listeEurope;

    return {getListe, getListeEU, getListeNonEU, getListeAmeriques, getListeEurope};

};

export defaut listeNationalites;

//let a = new listeNationalites();
//console.log('liste : ', a.getListe(), 'listeEU ', a.getListeEU(), 'listeNonEU ', a.getListeNonEU());
//console.log(a.getListeAmeriques());
console.log(a.getListe());
