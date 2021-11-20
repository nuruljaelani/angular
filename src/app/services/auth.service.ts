import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://mountoyatest.000webhostapp.com/public/auth';

  constructor(private http:HttpClient) { }

  login(user: any) {
    return this.http.post<any>(this.url, user)
  }
}
