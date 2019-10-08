import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Profile } from 'src/models/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  userProfile: Profile;
  loggedIn: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {
    this.userService.userProfile.subscribe((profile: Profile) => {
      this.userProfile = profile;
      this.loggedIn = profile != null? true : false;
    });
  }

  logout() {
    this.userService.logout();
  }

}
