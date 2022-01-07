import { Injectable } from '@angular/core';
import createAuth0Client from "@auth0/auth0-spa-js";
import {Router, UrlTree} from "@angular/router";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authClient = createAuth0Client({
    domain: 'notavailable.auth0.com',
    client_id: '1RCoLmdJrszem9go4HTEFAGEAV1BntON',
    redirect_uri: `${window.location.origin}/callback`,
    audience: 'orca-api-example'
  });

  constructor(private router: Router) { }

  async loggedIn(): Promise<boolean> {
    const client = await this.authClient;

    if (await client.isAuthenticated()) {
      return true;
    }

    await this.login();
    return false;
  }

  async login() {
    const client = await this.authClient;
    await client.loginWithRedirect();
  }

  async handleCallback(): Promise<UrlTree> {
    const client = await this.authClient;

    await client.handleRedirectCallback();

    return this.router.parseUrl('/home');
  }

  async getCoolUserInfo(): Promise<unknown> {
    const client = await this.authClient;

    return await client.getIdTokenClaims();
  }

  getUserStuff(): Observable<unknown> {
    return from(this.getCoolUserInfo());
  }
}
