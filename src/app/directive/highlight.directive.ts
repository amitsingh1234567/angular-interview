import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})

export class HighlightDirective {
    constructor(private el: ElementRef){};

    @Input() appHighlight = 'yellow';

    @HostListener('mouseenter')
    onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = this.appHighlight;
    };

    @HostListener('mouseleave') 
    onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = '';
    }
}