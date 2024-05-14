import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}