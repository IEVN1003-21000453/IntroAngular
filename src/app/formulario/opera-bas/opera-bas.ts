import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opera-bas',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './opera-bas.css',
  templateUrl: './opera-bas.html',
})
export class OperaBas {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacion: string = '';

  //sumar():void{
   // this.resultado=parseInt(this.num1)+parseInt(this.num2)
  //}
  //restar():void{
    //this.resultado=parseInt(this.num1)-parseInt(this.num2)
  //}
  //multiplicar():void{
    //this.resultado=parseInt(this.num1)*parseInt(this.num2)
  //}
  //dividir():void{
   // this.resultado=parseInt(this.num1)/parseInt(this.num2)
  //}

  calcular() {

    if (this.operacion === 'sumar') {
      this.resultado = this.num1 + this.num2;
    }

    if (this.operacion === 'restar') {
      this.resultado = this.num1 - this.num2;
    }

    if (this.operacion === 'multiplicar') {
      this.resultado = this.num1 * this.num2;
    }

    if (this.operacion === 'dividir') {
      this.resultado = this.num1 / this.num2;
    }

  }

}
