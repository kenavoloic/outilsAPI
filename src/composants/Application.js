import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
            liste: null,
            abbreviation: '',
            libelle: ''
        
        }
    }

    componentDidMount = () => {}

    componentDidUpdate = () => {}

    componentDidCatch = (erreur, info) => {
        console.log(erreur);
        console.log(info);
    }

    communicationFormulaireApplication = (donnees, abbreviation, libelle)  => {
        if(donnees){
            this.setState({liste: donnees, abbreviation: abbreviation, libelle: libelle});
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
