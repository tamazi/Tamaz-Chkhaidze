import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service';
import { User } from  'firebase';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.less']
})

export class VerifyEmailComponent implements OnInit {
  user: User;
  emailVerified: boolean;

  constructor(private  authService:  AuthService) {
    if(authService.afAuth.auth.currentUser.emailVerified)
      this.emailVerified=authService.afAuth.auth.currentUser.emailVerified
  }

  ngOnInit() {  }

}
