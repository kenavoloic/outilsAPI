import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Application.css';

import Formulaire from './Formulaire';
import Musicien from './Musicien';
import Entete from './Entete';
import BasDePage from './BasDePage';
import listeOrchestrale from './listeOrchestrale';
import Trombinoscope from './Trombinoscope';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            liste: [],
            listeAnterieure: [],
            abbreviation: '',
            libelle: '',
            musiciens: []
        
        }
    }

    componentDidMount = () => {}

    componentDidUpdate = () => {}

    componentDidCatch = (erreur, info) => console.log(erreur.message);

    communicationFormulaireApplication = (donnees, abbreviation, libelle)  => {
        console.log("Réception colis", abbreviation, libelle);
        if(donnees){
            this.setState({liste: donnees, abbreviation: abbreviation, libelle: libelle});
        }
    }


    listeMusiciens = data => {
        if(data){
            this.setState({musiciens: data});
        }
    }

    render(){
        return (
            <React.Fragment>
            <header className="entete">
            <Formulaire nomClasse="enteteFormulaire" canalEnfantParent={this.communicationFormulaireApplication}/>
            </header>
            {this.state.liste ? <Trombinoscope data={this.state.liste} abbreviation={this.state.abbreviation} libelle={this.state.libelle} nomClasse="trombinoscope" /> : null} 
            </React.Fragment>
        );
    }

}

export default Application;
