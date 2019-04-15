import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service';
import { User } from  'firebase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})

export class ListComponent implements OnInit {

  user: User;
  emailVerified: boolean;

  constructor(private  authService:  AuthService) {
    if(authService.afAuth.auth.currentUser.emailVerified)
      this.emailVerified=authService.afAuth.auth.currentUser.emailVerified
  }

  ngOnInit() {  }
}
