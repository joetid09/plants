import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  readonly url = 'http://localhost:5123/Account'
  // submitLogin(username: string, password: string) {
  //   console.log(`Login received: username: ${username}, password: ${password}.`);
  // }

  async submitLogin(username: string, password: string): Promise<boolean> {
    const data = await fetch(`${this.url}/${username}`);
    const results = await data.json() ?? {};
    console.log("heres the results" + results);
    return results;
  }
}
