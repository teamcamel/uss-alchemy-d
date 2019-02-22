import { getUserJson } from '../functions/jsonFunction.js';

const name = document.getElementById('name');
const position = document.getElementById('position');
const user = getUserJson();

name.textContent = user.name;
position.textContent = user.job;
