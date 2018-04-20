import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { IMCComponent } from './imc/imc.component';
import { ImcPipe } from './imc/imc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IMCComponent,
    ImcPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
