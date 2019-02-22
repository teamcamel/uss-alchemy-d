import statusBar from '../functions/status-bar.js';
import { getUserJson } from '../functions/jsonFunction.js';

let user = getUserJson();
const userStatus = document.getElementById('user-status');

userStatus.textContent = user.name;

statusBar();

