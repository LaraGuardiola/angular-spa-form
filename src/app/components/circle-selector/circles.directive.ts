import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCircles]'
})
export class CirclesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appCircles') set circles(numArray: (number|string)[]) {
    this.viewContainer.clear()
    numArray.forEach( num => this.viewContainer.createEmbeddedView(this.templateRef, {
      index: numArray.indexOf(num)
    }))
  }
}
