import { Routes, RouterModule } from '@angular/router';
import { ApplicantComponent} from './applicant/applicant.component';
import { AdminComponent} from './admin/admin.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'applicant', component: ApplicantComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

