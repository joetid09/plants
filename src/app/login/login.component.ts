import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  username: any;
  password: any;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submitLogin() {
    console.log(this.loginForm.value);
    this.loginForm.value.username ?? '',
      this.loginForm.value.password ?? '',
}
