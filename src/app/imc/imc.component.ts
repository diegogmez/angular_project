import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TipoIMC } from './imc.model';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html'
})

export class IMCComponent implements OnInit, OnChanges {
    imc: number;
    tipo: TipoIMC;
    @Input() peso : number;
    @Input() altura : number;

    calcular(peso:number, altura:number ):number{

      console.log(this.peso);
      console.log(this.altura);

      this.imc = (this.peso)/((this.altura)*(this.altura))
      return this.imc
    }

    seleccionarIMC(imc:number):TipoIMC{
      let IMCtipo :TipoIMC;
      if (imc<=16){
        IMCtipo = TipoIMC.desnutrido;
      }
      else if (imc<=18){
        IMCtipo = TipoIMC.delgado;
      }
      else if (imc<=25){
        IMCtipo = TipoIMC.normal;
      }
      else if (imc<=31){
        IMCtipo = TipoIMC.sobrepeso;
      }
      else {
        IMCtipo = TipoIMC.obeso;
      }
      return IMCtipo
    }
    ngOnInit(){
      console.log ("INI IMC")
    }
    ngOnChanges (changes: SimpleChanges){
      this.imc = this.calcular(this.peso,this.altura);
      this.tipo = this.seleccionarIMC(this.imc);
    }
}
