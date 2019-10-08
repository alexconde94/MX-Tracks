import { Component } from '@angular/core';
import { Profile } from 'src/models/profile';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  userProfile: Profile;

  constructor(private userService: UserService) {
    userService.userProfile.subscribe((profile: Profile) => this.userProfile = profile);
  }
}
