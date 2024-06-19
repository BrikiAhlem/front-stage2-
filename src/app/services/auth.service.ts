import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://votre-backend.com/api'; // Remplacez cela par l'URL de votre backend

  constructor(private http: HttpClient) {}

  resetPassword(email: string): Observable<any> {
    const resetUrl = `${this.apiUrl}/reset-password`; // Remplacez "/reset-password" par l'endpoint de récupération de mot de passe de votre backend
    return this.http.post(resetUrl, { email });
  }
}