import {Component} from 'angular2/core';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService,
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])

export class AppComponent{

	title = 'Tour of heroes!';

}
