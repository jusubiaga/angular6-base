import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(username, password) {
    this.authService.login(username, password);
  }

}
