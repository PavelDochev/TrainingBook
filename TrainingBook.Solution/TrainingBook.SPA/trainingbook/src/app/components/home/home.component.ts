import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/services/home/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

testingString:string;
  constructor(private homeService:HomeService) { }

  ngOnInit() {
  this.homeService.getTesting().subscribe(p => {
        this.testingString = p;
      },
      error => {
        this.testingString = "КРИВАК";
      })
  }

}
