import React from 'react';
import ReactDOM from 'react-dom';
import Boite from './Boite';


class ChoixNationalites extends React.Component {
    constructor(props){
        super(props);

        this.booleens = props.data.map(x => {
            let {clef, booleen} = x;
            return {clef: clef, booleen: booleen};
        });

        this.state = {
            liste: props.data,
            booleens: this.booleens,
            requete: null,
            nouvelleRequete: false
        }
    }

    boitesAcocher = (liste, fonction) => {
        return Array.from(liste).map((x, numero) => <Boite data={x} fonction={fonction} numero={numero} key={numero} />);       
    }

    changementBoite = (numero, e) => {
        let element = this.state.liste[numero];
        element.booleen = e.target.checked;
        //this.setState({libre: element});
        //this.setState({ element}, ()=> this.setState({requete: this.state.liste.filter(x => x.booleen === true).map(x => x.clef).join(","), nouvelleRequete: true}));
        this.setState({ element},  ()=> this.props.fonction(this.state.liste.filter(x => x.booleen === true).map(x => x.clef).join(",")), () => this.setState({nouvelleRequete: true}));
    }

    render(){
        return (
            <details className="pays" key="pays">
            <summary key="sommaire">Nationalités</summary>
            <article className="nations" key="nations">
            {this.boitesAcocher(this.state.liste, this.changementBoite)}
            </article>
            </details>
        );

    }
}


export default ChoixNationalites;