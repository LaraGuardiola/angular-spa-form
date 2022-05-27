import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appNavigationLine]'
})
export class NavigationLineDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appNavigationLine') set navigationLine(numArray: (number|string)[]) {
    this.viewContainer.clear()
    numArray.forEach( num => this.viewContainer.createEmbeddedView(this.templateRef, {
      index: numArray.indexOf(num)
    }))
  }
}
