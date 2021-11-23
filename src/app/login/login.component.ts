import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {
    user_name: '',
    password: ''
  }
  private url = 'https://mountoyatest.000webhostapp.com/public/auth';
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {}

  loginUser() {
    return this._auth.login(this.userData).subscribe((res) => console.log(res))
  }

}
