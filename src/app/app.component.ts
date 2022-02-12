import { IngresoServicio } from './ingreso/ingreso.servicio';
import { Egreso } from './egreso/egreso.model';
import { Ingreso } from './ingreso/ingreso.model';
import { Component } from '@angular/core';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingersos: Ingreso []=[];
  egresos: Egreso  []=[];

  constructor(private ingresiServicio:IngresoServicio,
              private egresoServicio:EgresoServicio){
                this.ingersos = ingresiServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingersos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
