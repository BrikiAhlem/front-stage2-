import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router: Router) { }

  login() {
    console.log(this.email);
    console.log(this.password);

    // Vérifier si les champs d'e-mail et de mot de passe sont valides avant de continuer avec le code de connexion.
    if (!this.isEmailValid(this.email) || !this.isPasswordValid(this.password)) {
      // Afficher un message d'erreur si les champs ne sont pas valides.
      alert("Veuillez remplir correctement les champs d'e-mail et de mot de passe.");
      return;
    }

    // Si les validations du formulaire sont correctes, continuez avec le reste du code de connexion.

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://127.0.0.1:9992/user/login", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);

        if (resultData.status) {
          alert("Bienvenue");
          this.router.navigateByUrl('/aceuil');
        } else {
          alert("Incorrect Email or Password");
          console.log("Error login");
        }
      },
      (error) => {
        alert("Une erreur s'est produite lors de l'envoi de la demande.");
        console.log("Error sending login request:", error);
      }
    );
  }

  // Vérifier si l'e-mail est valide
  private isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Vérifier si le mot de passe est valide (au moins 6 caractères)
  private isPasswordValid(password: string): boolean {
    return password.length >= 6;
  }
}