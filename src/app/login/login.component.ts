import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginService: LoginService = inject(LoginService);
  username: any;
  password: any;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submitLogin() {
    this.loginService.submitLogin(
      this.loginForm.value.username ?? '',
      this.loginForm.value.password ?? ''
    )
    console.log(this.loginForm.value);

  }
}