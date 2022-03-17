import { Component, OnInit } from '@angular/core';

import { Hero } from '../../data-info/interfaces/hero';
import { HEROES } from '../../data-info/mock-data/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // --1-- hero: string = "Windstorm"
  // --2-- hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // Defines an array pulled in from mock-data to be used inside components HTML
  heroes = HEROES;
  // watch for the selection of any hero displayed in our HTML ul
  selectedHero?: Hero;

  constructor(private HeroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent:  Selected hero: ${hero.name} @ id=${hero.id}`)

  }

  getHeroes(): void {
    this.HeroService.getApiHeroes()
      .subscribe(gotHeroes => {
        console.log(gotHeroes)
        this.heroes = []
        for(let h in gotHeroes) {
          this.heroes.push(gotHeroes[h])
          console.log(`Hero #${gotHeroes[h].id} ${gotHeroes[h].name} was entered!`)
        }
      });
  }
}
