import { Component, ViewEncapsulation } from '@angular/core';
import { Comp2Component } from '../comp2-component/comp2-component';

@Component({
  selector: 'app-comp1-component',
  imports: [Comp2Component],
  templateUrl: './comp1-component.html',
  styleUrl: './comp1-component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class Comp1Component {

}
