import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-creer-compt',
  templateUrl: './creer-compt.component.html',
  styleUrls: ['./creer-compt.component.css']
})
export class CreerComptComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    // Vérifier si les champs du formulaire sont valides avant de continuer avec le code d'enregistrement.
    if (
      !this.isFieldValid(this.firstname) ||
      !this.isFieldValid(this.lastname) ||
      !this.isEmailValid(this.email) ||
      !this.isPasswordValid(this.password)
    ) {
      // Afficher un message d'erreur si les champs ne sont pas valides.
      alert("Veuillez remplir correctement tous les champs.");
      return;
    }

    // Si les validations du formulaire sont correctes, continuez avec le reste du code d'enregistrement.

    let bodyData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:9992/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registered Successfully");
    });
  }

  // Vérifier si un champ est valide (non vide)
  private isFieldValid(value: string): boolean {
    return value.trim() !== '';
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
