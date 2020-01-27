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

    communicationFormulaireApplication = donnees => {
        if(donnees){
            this.setState({liste: donnees});
        }
        //console.log(this.state.liste);
    }


    listeMusiciens = data => {
        if(data){
            this.setState({musiciens: data});
        }
    }

    sauvegardeJson = () => {
        let json = JSON.stringify(this.state.liste);
        let blob = new Blob([json], {type: "text/plain"});
        let url = URL.createObjectURL(blob);
        let lien = document.createElement('a');
        lien.download = 'filename.json';
        lien.href = url;
        lien.click();
    }
  
    render(){
        return (
            <React.Fragment>
            <header className="entete">
            <Formulaire nomClasse="enteteFormulaire" canalEnfantParent={this.communicationFormulaireApplication}/>
            </header>
            {this.state.liste ? <Trombinoscope data={this.state.liste} nomClasse="trombinoscope" listeMusiciens={this.listeMusiciens} /> : null} 
            </React.Fragment>
        );
    }

}

export default Application;
