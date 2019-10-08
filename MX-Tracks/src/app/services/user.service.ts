import { Injectable } from '@angular/core';
import { MOCK_PROFILE } from 'src/mocks/mock-profiles';
import { Profile } from 'src/models/profile';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean;
  userProfile: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(null);

  constructor() { }

  // returns true if login was successful
  login(email: String, password: String): boolean {
    this.userProfile.next(MOCK_PROFILE);
    return true;
  }

  logout() {
    this.userProfile.next(null);
  }

}
