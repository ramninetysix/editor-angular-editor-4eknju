import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostClass } from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  @ViewChild(HostClass) childRef: HostClass;

  Components = [HelloComponent, HiComponent];

  constructor(public factres: ComponentFactoryResolver) {}

  ViewComponent(id) {
    this.childRef.ViewRef.clear();
    const fact = this.factres.resolveComponentFactory(
      id == 0 ? this.Components[0] : this.Components[1]
    );
    this.childRef.ViewRef.createComponent(fact);
  }
}
