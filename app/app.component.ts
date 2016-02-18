import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><br><h2>{{hero}}</h2>'
})
export class AppComponent { 

	public title = 'Tour of heroes';
	public hero = 'Windstrom';

}
