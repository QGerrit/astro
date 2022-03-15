import { NgModule } from '@angular/core';
import { AstroComponent } from './astro.component';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class AstroModule {}
