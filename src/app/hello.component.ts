import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}

@Component({
  selector: 'hi',
  template: `<h1>hi {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HiComponent {
  @Input() name: string;
}
