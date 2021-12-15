import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRegblack]'
})
export class RegblackDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color = "white"
    el.nativeElement.style.backgroundColor = "black"
   }

}
