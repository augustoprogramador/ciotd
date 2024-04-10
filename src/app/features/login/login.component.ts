import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/device';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public form = new FormGroup({
    username: new FormControl('', {validators: Validators.required}),
    senha: new FormControl('', {validators: Validators.required}),
  });

  constructor (private _router: Router, private _alert: ToastrService, private _cookie: CookieService, private device: DeviceService) {}

  public signup(): void {
    this._alert.success('Cadastrei', 'Agora tenho uma conta!')
    this.device.signup(this.form.value as User).subscribe({
      next(value) {
        console.log(value.headers);
      },
    });
  }

  public login(): void {
    this.device.getUser(this.form.value as User).subscribe({
      next: (value) => {
        console.log(value)
        this._router.navigate(['dashboard', 'home']);
        this._cookie.set('user', 'true');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
