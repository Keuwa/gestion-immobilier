import request from 'request';
import settings from '../settings';

var authActions = {
  login() {
      //request.post({url:""})
      alert(settings.apiUrl);
  },
  logout() {
      alert('logout');
  }
}

export default authActions;
