import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comp1Component } from '../comp1-component/comp1-component';


interface CardContext {
  title: string;
  message: string;
  btnText: string;
  onClick?: () => void;
}


@Component({
  selector: 'app-ng-template-component',
  imports: [CommonModule, Comp1Component],
  templateUrl: './ng-template-component.html',
  styleUrl: './ng-template-component.scss',
})
export class NgTemplateComponent implements OnInit {
  
  ngOnInit(){
    console.log('---NgTemplateComponent')
  }
cards: CardContext[] = [
  {
    title: 'Uxtrendz',
    message: 'Welcome to our channel!',
    btnText: 'Subscribe',
    onClick: () => console.log('Subscribed!')
  },
  {
    title: 'Design Daily',
    message: 'New tips every week',
    btnText: 'Follow',
    onClick: () => console.log('Followed!')
  },
  {
    title: 'Angular Bytes',
    message: 'Short lessons, big impact',
    btnText: 'Join',
    onClick: () => console.log('Joined!')
  }
];

}
