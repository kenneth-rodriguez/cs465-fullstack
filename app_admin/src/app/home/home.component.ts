import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
  ) {}

  ngOnInit() { }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}