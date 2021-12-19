import {Component} from '@angular/core';

declare var $: any;
declare const Blazor: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'simple-angular-project';
  blazorComponentVisible: boolean;

  constructor() {
    this.blazorComponentVisible = false;
  }

  toggleBlazorComponentVisibility() {
    this.blazorComponentVisible = true;
    let containerElement = document.getElementById('blazor-container');
    Blazor.rootComponents.add(containerElement, 'counter', { title: "Title Set from Angular App" });
  }
}
