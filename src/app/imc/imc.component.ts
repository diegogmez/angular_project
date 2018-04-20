import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html'
})
export class IMCComponent implements OnInit, OnChanges {
    imc: number;
    @Input() peso : number;
    @Input() altura : number;

    calcular(){
      this.imc = (this.peso)/((this.altura)^2)
      return this.imc
    }
    ngOnInit(){
      console.log ("INI IMC")
    }

    ngOnChanges (changes: SimpleChanges){
      this.calcular();
    }
}
