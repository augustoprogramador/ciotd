import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (private _router: Router, private _alert: ToastrService, private _cookie: CookieService) {}
  
  public login(): void {
    this._router.navigate(['dashboard', 'home']);
    this._alert.success('Teste', 'CONSEGUII');
    this._cookie.set('user', 'true');
  }
}
