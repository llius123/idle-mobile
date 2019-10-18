import { NgModule } from '@angular/core';

import { OrientacionService } from './core/orientacion.service';
import { GeneradorNivelService } from './campamento/campanya/core/generadorNivel.service';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [],
  providers: [
	OrientacionService,
	GeneradorNivelService
  ],
  bootstrap: []
})
export class ServiceModule {}