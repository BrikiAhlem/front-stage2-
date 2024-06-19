import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-oublier',
  templateUrl: './oublier.component.html',
  styleUrls: ['./oublier.component.css']
})
export class OublierComponent  { 
   email!: string;
  value!: string;

  constructor(private authService: AuthService) {}
  
  resetPassword() {
    this.authService.resetPassword(this.email)
      .subscribe(
        response => {
          // Traiter la réponse de votre backend en cas de succès
          console.log('Un email a été envoyé pour la récupération du mot de passe.');
        },
        error => {
          // Traiter l'erreur en cas d'échec
          console.error('Erreur lors de la récupération du mot de passe :', error);
        }
      );
  }
  }
  
 
