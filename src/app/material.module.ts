import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class DemoMaterialModule {}
