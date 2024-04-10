import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _url = 'http://localhost:3000';
  private _http = inject(HttpClient);

  constructor() { }

  public getUser(user: User): Observable<User> {
    return this._http.get<User>(`${this._url}/user?username=${user.username}&senha=${user.senha}`);
  }

  public signup(form: User): Observable<HttpResponse<Response>> {
    return this._http.post<Response>(`${this._url}/user`, form, {observe: 'response', responseType: 'json'});
  }

}
