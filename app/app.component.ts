import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template:`
    {{myHero.name}}
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        (click)="onSelect(hero, hero.name)"
        [class.selected]="hero === selectedHero"
      >
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    body {
      background-color: red;
    }
  `]
})

export class AppComponent{
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  
  myHero: Hero = {
    id: 1,
    name: 'Testing'
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
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