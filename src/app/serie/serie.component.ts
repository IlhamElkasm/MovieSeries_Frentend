import { Component, OnInit } from '@angular/core';
import { Serie } from '../Model/serie';
import { Router } from '@angular/router';
import { ServiceSerieService } from '../Service/service-serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent  implements OnInit{


  series: Serie[] = [];

  constructor(private serieservice: ServiceSerieService ,
    private router: Router) { }

  ngOnInit(): void {
    this.getSerieList();
  }

  private getSerieList(){
    this.serieservice.getSerieList().subscribe(data => {
      this.series = data;
    });
  }
}
