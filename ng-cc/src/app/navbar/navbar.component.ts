import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user = window.localStorage.getItem("auth_name");
  constructor(private router: Router){}
  signout(){
    window.localStorage.removeItem('auth_name');
    this.router.navigate(['/'])
  }
}
