import { Routes } from '@angular/router';
import { Comp1Component } from './comp1-component/comp1-component';
import { TestComponent } from './test-component/test-component';
import { FormComponent } from './form-component/form-component';
import { NgTemplateComponent } from './ng-template-component/ng-template-component';

export const routes: Routes = [
     // {path: 'test', loadComponent: () => import('./test-component/test-component').then(comp => comp.TestComponent)
     // },
     // {path: 'form', loadComponent: () => import('./form-component/form-component').then(comp => comp.FormComponent)},
     {path: 'ng-template', loadComponent: () => import('./ng-template-component/ng-template-component').then(comp => comp.NgTemplateComponent)}
     // {path: 'ng-template', component: FormComponent}
    ];
