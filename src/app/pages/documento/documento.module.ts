import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentoComponent
  ],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DocumentoModule { }
