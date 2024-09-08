import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isAuthenticated = 
    sessionStorage.getItem('login') === 'true';
  }

  logout() {
    sessionStorage.removeItem('login');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
