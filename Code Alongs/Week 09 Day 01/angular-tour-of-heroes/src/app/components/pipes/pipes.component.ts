import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  dateValue: Date = new Date();
  piValue:number = 3.14159265;
  percentValueOne: number = .34
  percentValueTwo: number = 90.34342934872

  constructor() { }

  ngOnInit(): void {
  }

}
