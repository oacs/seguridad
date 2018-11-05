import { Component, OnInit } from '@angular/core';
import { abcdario } from '../app.component';

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.scss']
})
export class CifradoComponent implements OnInit {

  public texto: string;
  public cifrado =  [];
  public alfabeto: Map<string, string>;
  constructor() { }

  ngOnInit() {
    this.alfabeto = new Map<string, string>();
    this.alfabeto.set(' ', ' ');
    this.texto = '';
    this.random();
    console.log(this.alfabeto);
    this.texto = 'Hola mundo';
    console.log(this.texto);
    this.texto = this.texto.toLowerCase();
    this.cifrar();
    console.log(this.cifrado);
  }

  public cifrar(){
    for (let index = 0; index < this.texto.length; index++) {
      this.cifrado[index] =(this.alfabeto.get(this.texto.charAt(index)) );
    }
  }
  

  public random() {
    const aux = abcdario.slice();
    let j, x, i;
    for (i = aux.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = aux[i];
        aux[i] = aux[j];
        aux[j] = x;
    }
    abcdario.forEach(element => {
      this.alfabeto.set(element, aux.pop());
    });

  }

}
