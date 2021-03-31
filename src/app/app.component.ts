import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature: string;

  constructor() {
    this.loadedFeature = 'recipe';
  }

  onNavigate(feature: string) {
    console.log('feature ==> ',  feature);
    this.loadedFeature = feature;
    
  }
}
