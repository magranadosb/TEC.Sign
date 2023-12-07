import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvelopeComponent } from './envelope.component';

const routes: Routes = [
  {
    path: '',
    component: EnvelopeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvelopeRoutingModule { }
