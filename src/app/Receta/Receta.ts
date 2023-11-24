export class Receta {
  
    id: number;                
    nombre: string;           
    imagenUrl: string;       
    calificacion: number;      
    numOpiniones: number;      
    duracion: number;          
    dificultad: string;        
    autor: string;            

    public constructor(id: number,nombre: string,imagenUrl: string,calificacion: number,numOpiniones: number,duracion: number,dificultad: string,autor: string) {
        this.id = id;
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;
        this.calificacion = calificacion;
        this.numOpiniones = numOpiniones;
        this.duracion = duracion;
        this.dificultad = dificultad;
        this.autor = autor;
    }
}
