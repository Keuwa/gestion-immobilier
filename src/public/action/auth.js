//import request from 'request'
var request = require('request')
import settings from '../settings'
const path = require('path');


var authActions = {
  login(bodyRequest,next) { //next is the function called for updating UI afterward
      var url =settings.apiUrl+'/user/login';
      request(
        {
          method : "POST",
          url:url,
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(bodyRequest)},function (error,response,body) {
            body = JSON.parse(body)
            if(body.code){
              next(body.code)
            }
            else{
              localStorage.setItem('token',body.token)
              next(200)
            }
        })
  },
  logout() {
      alert('logout');
  }
}

export default authActions;
