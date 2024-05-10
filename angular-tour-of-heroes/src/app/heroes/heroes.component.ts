import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule], // need common module for pipe uppercase
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;

  selectedHero ?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
