import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  title = 'demo';
  rowsPerPage: number = 20; // Number of rows per page

  data: any[] = [];
  filteredData: any[] = [];
  filterByMake!: string;
  searchText!: string;
  itemsPerPage = 20;
  currentPage = 1;

  selectedVehicle: any;
  filterByVersion!: string;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { } // Inject Router in the constructor

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterByMake = params['brand']; // Get the value of "brand" from the URL query parameters
      this.getDataFromURL(); // Call the function to get data from URL and apply filters
    });
  }
  getDataFromURL() {
    const url = 'https://ev-database.continuousnet.com/models.json';
    this.http.get<any[]>(url).subscribe(
      (data: any[]) => {
        this.data = data;
        this.data = data.map((row) => ({
          vehicleMake: row.vehicleMake ? row.vehicleMake : '--',
          vehicleModel: row.vehicleModel ? row.vehicleModel : '--',
          drivetrainPowerHP: row.drivetrainPowerHP ? row.drivetrainPowerHP : '--',
          vehicleModelVersion: row.vehicleModelVersion ? row.vehicleModelVersion : '--',
          performanceAcceleration: row.performanceAcceleration ? row.performanceAcceleration : '--',
          performanceTopspeed: row.performanceTopspeed ? row.performanceTopspeed : '--',
          rangeWLTP: row.rangeWLTP ? row.rangeWLTP : '--',
          rangeReal: row.rangeReal ? row.rangeReal : '--',
          efficiencyReal: row.efficiencyReal ? row.efficiencyReal : '--',
          chargePlug: row.chargePlug ? row.chargePlug : '--',
          chargeStandardPower: row.chargeStandardPower ? row.chargeStandardPower : '--',
          chargeStandardPhase: row.chargeStandardPhase ? row.chargeStandardPhase : '--',
          chargeStandardPhaseAmp: row.chargeStandardPhaseAmp ? row.chargeStandardPhaseAmp : '--',
          fastChargePlug: row.fastChargePlug ? row.fastChargePlug : '--',
          fastChargePowerMax: row.fastChargePowerMax ? row.fastChargePowerMax : '--',
          batteryCapacityFull: row.batteryCapacityFull ? row.batteryCapacityFull : '--',

          images:row.images ? "https://ev-database.continuousnet.com/" + row.images[0]: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24INOvwoqegoHzBwJzA8YgZzyPRoGg03RT_n66EbX&s',
        } )) ;
        this.applyFilters();
      },
      (error: any) => {
        console.log('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    );
  }

  applyFilters() {
    // Filter by brand
    this.filteredData = this.data.filter((vehicle) => {
      return !this.filterByMake || vehicle.vehicleMake.toLowerCase().includes(this.filterByMake.toLowerCase())|| vehicle.vehicleModel.toLowerCase().includes(this.filterByMake.toLowerCase());
    });

    // Search in other columns
    if (this.searchText) {
      this.filteredData = this.filteredData.filter((vehicle) => {
        return (
          vehicle.vehicleMake.toLowerCase().includes(this.searchText.toLowerCase()) ||
           vehicle.vehicleModel.toLowerCase().includes(this.searchText.toLowerCase())
           

          // Add other search columns here
        );
      });
    }

    // Reset the current page to the first page when applying filters
    this.currentPage = 1;
  }


  onPageChange(event: LazyLoadEvent) {
    this.currentPage = (event.first !== undefined ? event.first : 0) / this.itemsPerPage + 1;
  }
}
