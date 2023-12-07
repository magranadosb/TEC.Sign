import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvelopeRoutingModule } from './envelope-routing.module';
import { EnvelopeComponent } from './envelope.component';


@NgModule({
  declarations: [
    EnvelopeComponent
  ],
  imports: [
    CommonModule,
    EnvelopeRoutingModule
  ]
})
export class EnvelopeModule { }
