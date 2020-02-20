import React from 'react';
import ReactDOM from 'react-dom';


class Genres extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            booleens: [ 
                {clef: 'f', genre:'Femme', parametre: 'female', booleen: true}, 
                {clef: 'h', genre:'Homme', parametre:'male', booleen: true}
            ],
            nouvelleRequete: true 
        }
    }

    alternateur = (numero, e) => {
        let element = this.state.booleens[numero];
        element.booleen = e.target.checked;
        this.setState({element, nouvelleRequete: true});
        if(this.state.nouvelleRequete){
            this.props.fonction(this.state.booleens.filter(x => x.booleen === true).map(x => x.parametre).join(","));
        }
    }


    affichage = (liste, fonction) => {
      return liste.map((x,numero) => (
        <section key={x.clef}>

        <input type="checkbox"
        numero= {numero}
        name={x.clef}
        checked={x.booleen}
        onChange={(e) => fonction(numero, e)}
        />
	
        <label htmlFor={x.clef}>{x.genre}</label>
	
        </section>
      ));
    }

    render(){
        return (
            <details className="genres">
            <summary>Genres</summary>
            <article className="femmeHomme">
            {this.affichage(this.state.booleens, this.alternateur)}
            </article>
            </details>
        );

    }
}


export default Genres;
