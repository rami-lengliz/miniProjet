import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    { "username": "admin", "password": "456", "roles": ['ADMIN'] },
    { "username": "rami", "password": "123", "roles": ['USER'] }
  ];
  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) { }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = '';
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', 'false');
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string | null) {
    if (login) {
      this.loggedUser = login;
      this.isloggedIn = true;
      this.getUserRoles(login);
    }
  }

  private getUserRoles(username: string) {
    const user = this.users.find((curUser) => curUser.username === username);
    this.roles = user ? user.roles : [];
  }

  SignIn(user: User): boolean {
    let validUser = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password === curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', 'true');
      }
    });
    return validUser;
  }

  isAdmin(): boolean {
    return this.roles && this.roles.includes('ADMIN');
  }
}
