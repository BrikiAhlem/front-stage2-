import { Component } from '@angular/core';
interface CustomWindow extends Window {
  google: any; // Ou le type spécifique pour l'objet 'google' de l'API Google Maps
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // Coordonnées pour le centre de la carte (par exemple, New York)
    const myLatLng = { lat: 40.7128, lng: -74.0060 };

    // Créer une nouvelle instance de carte en utilisant window['google']
    const map = new (window as unknown as CustomWindow).google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12 // Niveau de zoom initial
    });

    // Ajouter un marqueur à la position spécifiée sur la carte en utilisant window['google']
    new (window as unknown as CustomWindow).google.maps.Marker({
      map,
      position: myLatLng,
      title: 'Emplacement du marqueur'
    });
  }
  showImage: boolean = false;

  toggleImage() {
    this.showImage = true;
  }
}








