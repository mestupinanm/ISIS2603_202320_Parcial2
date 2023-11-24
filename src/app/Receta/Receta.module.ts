import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RecetaComponent } from './Receta.component';
import { RecetaService } from './Receta.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  declarations: [
    RecetaComponent 
  ],
  providers: [
    RecetaService 
  ],
  exports: [
    RecetaComponent 
  ]
})
export class RecetaModule { }
