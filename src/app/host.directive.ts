import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host]',
})
export class HostClass {
  constructor(public ViewRef: ViewContainerRef) {}
}
