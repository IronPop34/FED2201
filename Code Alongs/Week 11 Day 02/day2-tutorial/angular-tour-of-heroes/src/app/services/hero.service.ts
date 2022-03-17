import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { find } from 'rxjs/operators';


import { MessageService } from './message.service';

import { Hero } from '../data-info/interfaces/hero';
import { HEROES } from '../data-info/mock-data/mock-heroes';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  url: string = 'https://fed2201-4510b-default-rtdb.firebaseio.com/heroes/-MyIjCnsqes0rFdaZcrv';
  jsonExt: string = '.json';


  constructor(private messageService: MessageService, private http: HttpClient) { }

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

  getApiHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url + this.jsonExt)
  }

  // getApiSingleHero( id: string ): Observable<Hero> {
  //   return this.getHeroes().pipe(find( (hero: Hero) => hero.id === id))
  // }
}
