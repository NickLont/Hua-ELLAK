import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { Users } from '../_helpers/mock-users';

@Injectable()
export class AuthenticationService {
  login(username: string, password: string) {
    console.log('evala username: ' + username + ' kai password: ' + password);
    for (let user of Users){
      if (username === user.username && password === user.password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
