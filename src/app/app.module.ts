import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from './material.module';

@NgModule({
  declarations: [FormComponent, DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule],
  entryComponents: [FormComponent, DialogComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customForm = createCustomElement(FormComponent, { injector });
    customElements.define('app-form', customForm);
  }

  ngDoBootstrap() {}
}
