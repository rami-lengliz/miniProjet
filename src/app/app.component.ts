import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chanteur';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    const isloggedin: string | null = localStorage.getItem('isloggedIn');
    const loggedUser: string | null = localStorage.getItem('loggedUser');

    if (isloggedin !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  logout() {
    this.authService.logout();
  }
}
