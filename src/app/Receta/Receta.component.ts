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

  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.cargarRecetas();
  }

  cargarRecetas(): void {
    this.recetaService.getRecetas().subscribe(
      (data) => {
        this.recetas = data;
      },
      (error) => {
        console.error('Error al obtener las recetas', error);
      }
    );
  }
}
