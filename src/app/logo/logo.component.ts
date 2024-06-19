import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent { 
  data : any; 
  filteredData : any ; 
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getDataFromURL();
  }
 // Function to handle data transformation and remove duplicates
transformData(data: any[]): any[] {
  const uniqueMakes = new Set<string>(); // Create a Set to store unique vehicle makes
  return data.reduce((result, row) => {
    if (!uniqueMakes.has(row.vehicleMake)) {
      uniqueMakes.add(row.vehicleMake);
      result.push({
        vehicleMake: row.vehicleMake ? row.vehicleMake : '--',
        makerImage: row.makerImage ? "https://ev-database.continuousnet.com/" + row.makerImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24INOvwoqegoHzBwJzA8YgZzyPRoGg03RT_n66EbX&s',
      });
    }
    return result;
  }, []);
}

// Function to fetch data from URL and transform it
getDataFromURL() {
  const url = 'https://ev-database.continuousnet.com/models.json';
  this.http.get<any[]>(url).subscribe(
    (data: any[]) => {
      this.data = this.transformData(data); // Call the transformData() function to transform and remove duplicates
      this.applyFilters();
    },
    (error) => { 
      console.log('Une erreur s\'est produite lors de la récupération des données :', error);
    } 
  );
}
  applyFilters() {
    throw new Error('Method not implemented.');
  }

  redirectToDataTablePage(brand: string) {
    this.router.navigate(['/sghir'], { queryParams: { brand: brand } });
  }

 
}
