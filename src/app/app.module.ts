import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HelloComponent, HiComponent } from './hello.component';
import { HostClass } from './host.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularEditorModule],
  declarations: [AppComponent, HelloComponent, HiComponent, HostClass],
  entryComponents: [HelloComponent, HiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
