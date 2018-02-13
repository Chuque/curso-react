import Pessoa from './pessoa';
import 'react';

import './estilo.css';

function clone(object){
    return { ...object };
}

const logger = require('./logger');

const pessoa = new Pessoa('Rafael');
const pessoa2 = clone(pessoa);
pessoa2.nome = "John";


console.log(pessoa, pessoa2);

export default props => (
    <h1>Olá</h1>
);