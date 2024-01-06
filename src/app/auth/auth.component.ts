import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { 
    this.auth.authState.subscribe(user => {
      if (user) {
        console.log('User is logged in: ', user);
      } else {        
        console.log('User is logged out');
      }      
    }); 
  }

  ngOnInit(): void {
  }

  async signInWithEmailPassword(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  }

}
