import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  login(email: String, password: String) {
    let success = this.userService.login(email, password);
    this.router.navigate(['dashboard']);
  }

}
