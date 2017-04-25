import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.loading = true;
    if (this.authenticationService.login(this.model.username, this.model.password)){
      let user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role === 'Admin') {
        this.router.navigate(['/admin']);
      } else if (user.role === 'Applicant') {
        this.router.navigate(['/applicant']);
      }
    }
  }
}
