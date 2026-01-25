import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1-component/comp1-component';
import { Comp2Component } from './comp2-component/comp2-component';
import { Comp3Component } from './comp3-component/comp3-component';
import { FormComponent } from './form-component/form-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Comp1Component, Comp2Component, Comp3Component, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
