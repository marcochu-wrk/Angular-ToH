import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Inject data to necessary component, in this case the data will be injected to any root component that is subscribed
//Making it an observable will enable asynchronous injecting
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    //this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
