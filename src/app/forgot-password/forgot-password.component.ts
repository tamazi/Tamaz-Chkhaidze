import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
  }

}
