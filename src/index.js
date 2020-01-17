import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Application from './composants/Application.js';
//import Musicien from './composants/Musicien.js';

//const alba = new Musicien('f','alba','jessica','13.04.1984','alto','usa','houston','j.alba@babe.com');

const sortie = document.getElementById('racine');
ReactDOM.render(<Application />, sortie);
//ReactDOM.render(<Application zicos={alba}/>, sortie);
