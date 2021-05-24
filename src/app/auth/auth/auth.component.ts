import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authSerive: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
    } else {
      this.authSerive.signUp(email, password).subscribe(
        (res: any) => {
          console.log(res);
          this.isLoading = false;
        },
        (errorMessage) => {
          this.error = errorMessage;
          console.log();
          this.isLoading = false;
        }
      );
    }

    console.log(form.value);
    form.reset();
  }
}
