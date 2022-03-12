import { Component, OnInit } from '@angular/core';
import { NewHero } from 'src/app/data-info/interfaces/new-hero';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 1646197200000
  // 1519211810362

  onClickSubmit(result: any): NewHero {
    // console.log(`new hero's name: "${result.newHero}"`)
    console.dir(result)

    return {name: result.newHeroName, power: result.newHeroPower}
  }

}
