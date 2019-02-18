import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid username or password!';
  invalidLogin = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    // this.invalidLogin = !(this.username === 'correct' && this.password === 'correct'); /*that is not how life works unfortunately*/
    if (this.username === 'hardcoded' && this.password === 'hardcoded') {
      this.router.navigate(['welcome']);
    } else {
      this.invalidLogin = true;
    }
  }
}
