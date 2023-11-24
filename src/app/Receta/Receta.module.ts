import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Proporciona directivas como ngIf, ngFor, etc.
import { RecetaComponent } from './Receta.component';
import { RecetaService } from './Receta.service';
import { HttpClientModule } from '@angular/common/http'; // Importante para hacer solicitudes HTTP

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule // Importa HttpClientModule para realizar solicitudes HTTP dentro de los servicios
  ],
  declarations: [
    RecetaComponent // Declara el componente de recetas
  ],
  providers: [
    RecetaService // Provee el servicio de recetas para ser utilizado por otros componentes
  ],
  exports: [
    RecetaComponent // Exporta el componente de recetas para que pueda ser utilizado en otros módulos
  ]
})
export class RecetaModule { }
