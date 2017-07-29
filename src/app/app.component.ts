import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //para nombre
  nombre="simon";
  //se usa para el ejemplo de slice
  arreglo=[1,2,3,4,5,6,8,9,10];
  //Uso para pipe number
  PI= Math.PI;
  //Pipe Porcentaje
  a=0.234;

  //Pipe Currency
  salario= 1234.5;

  //Pipe JSON
  heroe={
    nombre:"logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle:"primera",
      casa:"19"
    }
  };

//AsyncPipe-Valida promesa
  valorDePromesa=new Promise((resolve,reject)=>{
    setTimeout( ()=>resolve('Llego la data!'),3500 );
  })

  //Pipe Date
  fecha=new Date();

  //Pipe Capitalizado 1
  nombre2="SimOn pIntado reyEs";

  //Dom Seguro-Video
  video="6Q9fBU5ICxc";

  //Pipe ocultar contraseña
  activar:boolean=true;
}//AppComponent
