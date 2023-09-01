import { Component, OnInit } from '@angular/core';
import {RoutingService} from "../../../services/routing/routing.service";
import {BackendService} from "../../../services/api/backend.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../../../styles.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public router: RoutingService,
    private backendService: BackendService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('log in ing')
    // @ts-ignore
    let username=document.getElementById('username').value;
    // @ts-ignore
    let password=document.getElementById('password').value;
    let email='boriskiva3@gmail.com';
    this.backendService.backendApiService.doLogin({
      email: email,
      username: username,
      password: password,
    }).subscribe(
      response => { console.log(response); },
      error => { console.log(error); },
    )
  }
}
