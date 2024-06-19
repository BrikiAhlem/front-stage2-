import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  itemsPerPage = 20;
  currentPage = 1;

  visible: boolean = false;
  totalPages: number = 0;
  pages: number[] = [];

  filterByVersion: any;

  showDialog() {
    this.visible = true;
  }
  data: any[] = [];
  filteredData: any[] = [];
  filterByMake!: string;
  searchText!: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getDataFromURL();
  }

  getDataFromURL() {   
    const url = 'http://localhost:3001/vehucule';  // Assurez-vous que ce port correspond à celui utilisé dans le backend
    this.http.get<any[]>(url).subscribe(
      (data: any[]) => {
        this.data = data.filter((item, index, self) => self.findIndex(i => i.vehicleMake === item.vehicleMake) === index);

        this.data = data.map((row) => ({
          vehicleMake: row.vehicleMake ? row.vehicleMake : '--',
          vehicleModel: row.vehicleModel ? row.vehicleModel : '--',
          id: row.id ? row.id : '--',
          images: row.images.length > 0 ? row.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24INOvwoqegoHzBwJzA8YgZzyPRoGg03RT_n66EbX&s',
          prix: row.prix ? row.prix : 0
        }));
        this.applyFilters(); // Apply the filters once the data is loaded
      },
      (error) => {
        console.log('An error occurred while fetching data:', error);
      }
    );
  }

  applyFilters() {
    // Filter by brand
    this.filteredData = this.data.filter((vehicle) => {
      return !this.filterByMake || vehicle.vehicleMake.toLowerCase().includes(this.filterByMake.toLowerCase()) || vehicle.vehicleModel.toLowerCase().includes(this.filterByMake.toLowerCase());
    });

    // Search in other columns
    if (this.searchText) {
      this.filteredData = this.filteredData.filter((vehicle) => {
        return (
          vehicle.vehicleMake.toLowerCase().includes(this.searchText.toLowerCase()) ||
          vehicle.vehicleModel.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    }
    // Reset the current page to the first page when applying filters
    this.currentPage = 1;
  }

  onPageChange(event: LazyLoadEvent) {
    this.currentPage = (event.first !== undefined ? event.first : 0) / this.itemsPerPage + 1;
  }

  redirectToDataTablePag(brand: string) {
    this.router.navigate(['/kbir'], { queryParams: { brand: brand } });
  }
}
