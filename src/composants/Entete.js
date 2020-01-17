import React from 'react';

const Entete = () => {
    return(
        <header className="entete">
        <form>
        <label>Nombre
        <input type="text" />
        </label>
        <input type="submit" value="Envoyer" />
        </form>
        </header>
    );
};

export default Entete;
