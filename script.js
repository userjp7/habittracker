import {changeTheme} from './modules/utils/changeTheme.js'
import {stateManagement} from './modules/utils/stateManagement.js'


document.addEventListener("DOMContentLoaded", () => {
  changeTheme();
  stateManagement();
});