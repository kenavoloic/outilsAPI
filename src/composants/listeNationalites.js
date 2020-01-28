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

  const eu = ['au', 'de', 'dk', 'es', 'fi', 'fr', 'gb', 'ie', 'no', 'nl'];
  const nonEU = ['br', 'ca', 'ch', 'ir', 'nz', 'tr', 'us'];
/*
  Array.from(liste).forEach(x => console.log(x.nationalite, x.booleen));

  const modificationListe = (choix,  liste) => {
    for (let clef in choix){
      if (liste[clef]){
	liste[clef].booleen = true;
      }
    }
    return liste;
  };

  const listeEU = modificationListe(eu, Array.from(liste));
  const listeNonEU = modificationListe(nonEU, Array.from(liste));
  const listeComplete = Array.from(liste).map(x => x.booleen=true);

 
  return {listeComplete, listeEU, listeNonEU};
*/
    return {liste};
	      
};

