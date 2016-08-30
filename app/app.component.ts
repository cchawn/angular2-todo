import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>My First Angular 2 App</h1>'
})

export class AppComponent{}

/* AppComponent is the root component.
 * Hosts the client user experience.
 * Each component controls a view (through it's template).
 *
 * @Component 'decorator' function takes metadata object as arg, applied to the class.
 *		selector: CSS selector for the HTML element that represents the component
 * 			Angular creates an instance of AppComponent wherever it see 'my-app' element in HTML
 * 		template: the HTML that defines the component (can include other components here too)
 * 
 * Component Class, empty right now, expand with properties and app logic. Export this class.
 */