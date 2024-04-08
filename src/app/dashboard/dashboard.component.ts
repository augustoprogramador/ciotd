import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public logado: boolean = false;

  constructor(private _cookie: CookieService, private _router: Router) {}

  public ngOnInit(): void {
    this.logado = this.userHasSession();
  }

  private userHasSession(): boolean {
    return !(this._cookie.get('user') === '');
  }

  private toggleSession(): void {
    this.userHasSession() ? this._cookie.delete('user') : this._cookie.set('user', 'true');
  }

  public logar(): void {
    this.toggleSession();
    this.logado = this.userHasSession();
  }

  public logout(): void {
    this._cookie.delete('user');
    this._router.navigate(['login']);
  }
}
