import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales1',
  templateUrl: './datos-personales1.component.html',
  styleUrls: ['./datos-personales1.component.css']
})
export class DatosPersonales1Component implements OnInit {

  ul: string = '<ul><li style="margin-bottom:0.5em;">Seguimiento de tu solicitud de préstamo en curso</li><li style="margin-bottom:0.5em;">Gestión de tus productos</li><li >Servicio de atencion al cliente privilegiado</li></ul>';
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
