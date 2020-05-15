import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css']
})
export class CovidInfoComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  countryname:string;
  country:Country;

  ngOnInit(): void {
  }
  getCovidInfo(){
    this.httpClient.get("https://covid19.mathdro.id/api/countries/"+this.countryname).subscribe(
      
        (country:Country)=>{
        this.country=country;
          console.log(country);
      },
      (error)=>{
        alert("Error..Country not Found");
      }
    )
    

  }
}
