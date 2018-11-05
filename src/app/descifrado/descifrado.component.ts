import { Component, OnInit } from '@angular/core';
import { abcdario } from '../app.component';

@Component({
  selector: 'app-descifrado',
  templateUrl: './descifrado.component.html',
  styleUrls: ['./descifrado.component.scss']
})
export class DescifradoComponent implements OnInit {

  public texto = [];
  public cifrado: string;
  public alfabeto: Map<string, string>;
  constructor() { }

  ngOnInit() {
    this.alfabeto = new Map<string, string>();
    this.alfabeto.set(' ', ' ');
    this.cifrado = '';
    this.random();
    console.log(this.alfabeto);
    this.cifrado = 'Hola mundo';
    console.log(this.cifrado);
    this.cifrado = this.cifrado.toLowerCase();
    this.descifrar();
    console.log(this.cifrado);
  }

  public descifrar() {
    for (let index = 0; index < this.cifrado.length; index++) {
      this.texto[index] = ((this.cifrado.charAt(index)) );
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
      this.alfabeto.set(aux.pop(), element);
    });

  }

}
