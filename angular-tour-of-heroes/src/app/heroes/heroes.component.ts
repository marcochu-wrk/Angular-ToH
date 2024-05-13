import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent], // need common module for pipe uppercase
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  
  constructor(private heroService: HeroService, private messageService: MessageService) {
    
  }
//On initialisation get heroes from service
  ngOnInit(): void{
    this.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[] = [];

  selectedHero ?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`);
  }
// heroes data is subscribed to heroes service
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
