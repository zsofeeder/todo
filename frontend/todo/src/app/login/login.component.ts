import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.invalidLogin = !(this.username === 'correct' && this.password === 'correct'); /*that is not how life works unfortunately*/
  }
}
