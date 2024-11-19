import { Injectable } from '@angular/core';
import axios from 'axios';
import { Contrato } from '../modelos/Contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoServiceService {

  private apiUrl = 'http://localhost:8082/contratos';

  constructor() { }

  saveContrato(contrato: Contrato): Promise<Contrato> {
    return axios.post(this.apiUrl, contrato)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error!', error);
        throw error;
      });
  }

  getContratos(): Promise<Contrato[]> {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error!', error);
        throw error;
      });
  }
}