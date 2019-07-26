import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestContentComponent } from './test-content/test-content.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'test-page', component: TestContentComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'dashboard', component: UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
