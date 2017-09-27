import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  supportedLanguages:Array<string>;

  constructor() {
    this.supportedLanguages=["en","bg"];
   }

  ngOnInit() {
  }

}
