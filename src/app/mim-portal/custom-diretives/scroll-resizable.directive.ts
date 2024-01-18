import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appScrollResizable]'
})
export class ScrollResizableDirective implements OnInit {
    @Input() resizable: boolean = true;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        if (this.resizable) {
            this.renderer.setStyle(this.el.nativeElement, 'overflow-y', 'auto');
            this.renderer.setStyle(this.el.nativeElement, 'resize', 'none');
        }
    }
}
