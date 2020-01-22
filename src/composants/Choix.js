import React from 'react';
import ReactDOM from 'react-dom';

class Choix extends React.Component {
    constructor(props){
        super(props);
        this.liste = this.props.data;
    }

    traitementItem = item => (
        <option key={item.abbreviation} value={item.abbreviation} disabled={item.disabled}>
        {item.libelle}
        </option>
    );

    affichageItems = liste => {
        const descendants = liste.map(x => {
            let retour;

            if(x.items){
                retour = (
                    <optgroup label={x.groupe} key={x.groupe.toLowerCase()}>
                    {x.items.map(this.traitementItem)}
                    </optgroup>
                );
            } else {
                retour = this.traitementItem(x);
            }
        return retour;
        });
        return descendants;
    };

    render(){
        return (
            <select onChange={this.props.onChange}>
            {this.affichageItems(this.liste)}
            </select>
        )
    }
}

export default Choix;
