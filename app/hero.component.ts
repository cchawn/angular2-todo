import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero',
  templateUrl: 'app/hero.component.html',
  styleUrls: ['app/hero.component.css']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  // make HeroService a private variable/instance
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    // gets heroes when our AppComponent activates
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

/* AppComponent is the root component.
 * Hosts the client user experience.
 * Each component controls a view (through it's template).
 *
 * @Component 'decorator' function takes metadata object as arg, applied to the class.
 *    selector: CSS selector for the HTML element that represents the component
 *      Angular creates an instance of AppComponent wherever it see 'my-app' element in HTML
 *    template: the HTML that defines the component (can include other components here too)
 * 
 * Component Class, empty right now, expand with properties and app logic. Export this class.
 */