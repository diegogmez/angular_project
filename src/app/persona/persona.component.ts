import { Component, OnInit, OnChanges } from '@angular/core';
import { Persona } from './persona.model'

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit, OnChanges{
    private persona : Persona;

    constructor (){

      this.persona = new Persona ("Vale", 1.65, 56);
    }

    public mostrarPersona(persona: Persona):void{
    }
    ngOnChanges(){

    }

    ngOnInit(){

    }
    public esVisible () : boolean { 
      return false;
    }
}
