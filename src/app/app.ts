import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica1');

  public alumne: String = "";
  public alumnes:any[] = []; //estem crean una array on a dins fiquem el nom i el stat 
  //public alumnes:{nom : string , stats : string}[] = []; //estem crean una array on a dins fiquem el nom i el stat 
  public mostraalumnes:any[] = [];

  

  constructor(){
    this.mostraalumnes = this.alumnes;
  }
  
  public addalumnes(){
    this.alumnes.push({ nom: this.alumne.trim(), stats: 'Present' }); //al ficar el nom surtira per defecre Present
    this.alumne = "";
  }

  public deletealumnes(){
    this.alumnes.splice(0,1)
    this.alumne = "";
  }
  public statalumnepresent(index: number){
    this.alumnes[index].stats = 'Present';
  } 

  public statalumnesausents(index: number){
    this.alumnes[index].stats = 'Ausent';
  }

public mostratotsalumnes() {
  this.mostraalumnes = this.alumnes; 
}

public mostratotsabsents() {
  this.mostraalumnes = this.alumnes.filter(alumne => alumne.stats === 'Ausent');
}

public mostratotspresents() {
  this.mostraalumnes = this.alumnes.filter(alumne => alumne.stats === 'Present');
}
}
