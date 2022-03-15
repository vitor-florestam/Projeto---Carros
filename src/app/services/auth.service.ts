import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userdata: IUserData) {
   return this.http.post(`${environment.baseUrl}/login`, userdata)
  }
}

interface IUserData {
  username: string
  password: string
}
