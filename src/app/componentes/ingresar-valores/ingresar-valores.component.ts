import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contrato } from '../../modelos/Contrato';
import { ContratoServiceService } from '../../servicios/contrato.service';

@Component({
  selector: 'app-ingresarvalores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-valores.component.html',
  styleUrls: ['./ingresar-valores.component.css']
})
export class IngresarValoresComponent {
  contrato: Contrato = new Contrato();

  constructor(private contratoService: ContratoServiceService) { }

  onSubmit() {
    this.contratoService.saveContrato(this.contrato).then(response => {
      console.log('Contrato guardado', response);
      // Aquí puedes agregar lógica adicional después de guardar el contrato
    }).catch(error => {
      console.error('Error al guardar el contrato', error);
    });
  }
}