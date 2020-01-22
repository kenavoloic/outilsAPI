import React from 'react';
import Formulaire from './Formulaire';

const Entete = () => {
/*
    let liste = {
        gender: {
            value: '',
            placeholder: 'Gender ?',
            valid:false,
            touche: false,
            validationRules: { isRequired: true},
            options: [
                {value: 'male', displayValue: 'Male'},
                {value: 'female', displayValue: 'Female'}
            ]
        }
    };
*/

    const changeHandler = e => {
        let name = e.target.name;
        let value = e.targe.value;
        console.log(name, value);
    };

    return(
        <header className="entete">
        <Formulaire />
        </header>
    );
};

export default Entete;
