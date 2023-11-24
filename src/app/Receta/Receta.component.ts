import { Component, OnInit } from '@angular/core';
import { Receta } from './Receta';
import { RecetaService } from './Receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './Receta.component.html',
  styleUrls: ['./Receta.component.css']
})
export class RecetaComponent implements OnInit {
  
  recetas: Receta[] = [];
  calificacionPromedio: number = 0;
  totalOpiniones: number = 0;
  recetaSeleccionada?: Receta;
  receta: Receta | undefined;

  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.cargarRecetas();
  }

  cargarRecetas(): void {
    this.recetaService.getRecetas().subscribe(
      (data) => {
        this.recetas = data;
        this.calcularResumenRecetas(); 
      },
      (error) => {
        console.error('Error al obtener las recetas', error);
      }
    );
  }
  

  calcularResumenRecetas(): void {

    let sumaCalificaciones = 0;
    let sumaOpiniones = 0;

    for (const receta of this.recetas) {
      sumaCalificaciones += receta.estrellas;
      sumaOpiniones += receta.cantidadOpiniones;
    }

    this.calificacionPromedio = this.recetas.length > 0 ? sumaCalificaciones / this.recetas.length : 0;
    this.totalOpiniones = sumaOpiniones;
  }

   /* aca intente hacer el de que al hacer click funcionara pero no sirvio */
  
  onSelect(receta: Receta): void {
    receta.ingredientes = receta.ingredientes.split('|').join(', ');
    this.recetaSeleccionada = receta;
  }
}
