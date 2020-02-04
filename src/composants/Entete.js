import React from 'react';
import Formulaire from './Formulaire';

class Entete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posteApourvoir: '',
            nombrePostulants: 12,
            seed: 'louisonBobet'
        };
        this.modificationSeed = this.modificationSeed.bind(this);
        this.fonctionInstrumentale = this.fonctionInstrumentale.bind(this);
        this.nombrePostes = this.nombrePostes.bind(this);
        this.requete = this.requete.bind(this);

    }

    modificationSeed(e){
        this.setState({seed: e.target.value});
    }


    fonctionInstrumentale(e){
        this.setState({posteApourvoir: e.target.value});
    }

    nombrePostes(e){
        this.setState({nombrePostulants: e.target.value});
    }

    requete(e){
        e.preventDefault();
        console.log(this.state);
    }

    componentDidUpdate(){
        console.log("Mise à jour");
    }

    render(){
        return(
            <header className="entete">
            <Formulaire nomClasse="formulaireEntete" />
            </header>
        );

    }
}

export default Entete;
