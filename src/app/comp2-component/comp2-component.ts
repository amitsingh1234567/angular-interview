import { Component, ViewEncapsulation } from '@angular/core';
import { Comp3Component } from '../comp3-component/comp3-component';

@Component({
  selector: 'app-comp2-component',
  imports: [Comp3Component],
  templateUrl: './comp2-component.html',
  styleUrl: './comp2-component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Comp2Component {

}
