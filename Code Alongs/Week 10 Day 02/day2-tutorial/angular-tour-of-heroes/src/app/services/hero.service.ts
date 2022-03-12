import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Hero } from '../data-info/interfaces/hero';
import { HEROES } from '../data-info/mock-data/mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)

    return of(hero)
  }
}
