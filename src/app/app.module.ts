import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from './material.module';

@NgModule({
  declarations: [ButtonComponent, FormComponent, DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule],
  entryComponents: [ButtonComponent, FormComponent, DialogComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    const customForm = createCustomElement(FormComponent, { injector });
    customElements.define('custom-button', customButton);
    customElements.define('app-form', customForm);
  }

  ngDoBootstrap() {}
}
