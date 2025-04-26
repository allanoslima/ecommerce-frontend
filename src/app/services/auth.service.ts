import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3036';

  constructor(private http: HttpClient) { }
  login(email: string, senha: string): Observable<any> {
    return this.http.post('${thisAPI_URL}/login', {email, senha});
  }
  
}
