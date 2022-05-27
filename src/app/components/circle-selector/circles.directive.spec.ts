import { CirclesDirective} from './circles.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

let templateRef: TemplateRef<any>
let viewContainer!: ViewContainerRef

describe('CirclesDirective', () => {
  it('should create an instance', () => {
    const directive = new CirclesDirective(templateRef, viewContainer);
    expect(directive).toBeTruthy();
  });
});
