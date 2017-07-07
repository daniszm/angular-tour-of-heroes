import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstrom'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado'),
    new Hero(5, 'Bomb'),
    new Hero(6, 'Mag'),
    new Hero(7, 'Tor')
  ];
  myHero = this.heroes[1];
  selectedHero: Hero;

  ngOnInit(){
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
