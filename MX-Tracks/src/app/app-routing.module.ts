import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestContentComponent } from './test-content/test-content.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TrackListComponent } from './track-list/track-list.component';
import { ExampleDashboardComponent } from './example-dashboard/example-dashboard.component';
import { NewTrackFormComponent } from './new-track-form/new-track-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/track-list', pathMatch: 'full'},
  {path: 'test-page', component: TestContentComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'track-list', component: TrackListComponent},
  {path: 'dashboard', component: UserDashboardComponent},
  {path: 'example-dashboard', component: ExampleDashboardComponent},
  {path: 'add-track', component: NewTrackFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
