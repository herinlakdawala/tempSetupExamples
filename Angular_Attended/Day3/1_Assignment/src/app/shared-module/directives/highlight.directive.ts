import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {
    }

    @HostListener('mouseover') onMouseOver() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'skyblue');
    }

    @HostListener('mouseout') onMouseOut() {
        this.renderer.removeStyle(this.element.nativeElement, 'background-color');
    }
}