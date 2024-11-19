import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../modelos/Contrato';
import { ContratoServiceService } from '../../servicios/contrato.service';

@Component({
  selector: 'app-mostrar-registros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-registros.component.html',
  styleUrl: './mostrar-registros.component.css'
})
export class MostrarRegistrosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoServiceService) { }

  ngOnInit() {
    this.contratoService.getContratos().then(response => {
      this.contratos = response;
    }).catch(error => {
      console.error('Error al obtener los contratos', error);
    });
  }
}
