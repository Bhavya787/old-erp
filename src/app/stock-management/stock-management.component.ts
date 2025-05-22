import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent implements OnInit {

  // This will hold the data fetched from the API
  stockData: any[] = [];
  
  // Columns to be displayed in the table
  columns: string[] = [
    'MilkCM500Stock', 'MilkCM200Stock', 'MilkTM500Stock', 'MilkTM200Stock',
    'Lassi200Stock', 'LassiCUP200Stock', 'LassiMANGOCUP200Stock', 'Dahi200Stock',
    'Dahi500Stock', 'Dahi2LTStock', 'Dahi5LTStock', 'Dahi10LTStock',
    'Dahi2LT15Stock', 'Dahi5LT15Stock', 'Dahi10LT15Stock', 'ButtermilkStock',
    'Khova500Stock', 'Khoya1000Stock', 'Shrikhand100Stock', 'Shrikhand250Stock',
    'Ghee200Stock', 'Ghee500Stock', 'Ghee15LTStock', 'PaneerlooseStock',
    'khovalooseStock', 'LASSICUPFOILStock', 'IFFFLAVERMANGOStock', 'IFFFLAVERVANILLAStock',
    'CULTUREAMAZIKAStock', 'CULTUREDANISKOStock', 'CULTUREHRStock', 'LIQUIDSOAPStock',
    'COSSODAStock', 'KAOHStock'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  // Method to fetch data from the API
  fetchData(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/get-stock-management')
      .subscribe(response => {
        this.stockData = response;
      }, error => {
        console.error('Error fetching data', error);
      });
  }
}

