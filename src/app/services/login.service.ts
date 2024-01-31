import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  submitLogin(username: string, password: string) {
    console.log(`Login received: username: ${username}, password: ${password}.`);
  }
}
