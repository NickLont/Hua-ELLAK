import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular Routing</h1>
  <nav>
    <a routerLink="/admin" routerLinkActive="active">Admin</a>
    <a routerLink="/applicant" routerLinkActive="active">Applicant</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
