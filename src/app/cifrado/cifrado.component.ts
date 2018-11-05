import { Component, OnInit } from '@angular/core';
import { abcdario } from '../app.component';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.scss']
})
export class CifradoComponent implements OnInit {

  public texto = new FormControl('');
  public textoCifrado = new FormControl('');
  public cifrado =  [];
  public alfabeto: Map<string, string>;
  public alfabetoReverso: Map<string, string>;
  public abcdario = [];
  public ABC = [];
  constructor() {
    this.abcdario = abcdario;
    this.ABC = abcdario.slice(0);
  }

  ngOnInit() {

    this.alfabeto = new Map<string, string>();
    this.alfabetoReverso = new Map<string, string>();
    this.alfabeto.set(' ', ' ');
    this.texto.setValue( '');
    this.random();
    console.log(this.alfabeto);
    this.texto.setValue( 'Hola mundo');
    console.log(this.texto);
    this.texto.setValue( this.texto.value.toLowerCase());
    this.cifrar();
    console.log(this.cifrado);
  }

  public cifrar() {
    this.cifrado = [];
    for (let index = 0; index < this.texto.value.length; index++) {
      this.cifrado[index] = (this.alfabeto.get(this.texto.value.charAt(index)) );
    }
    this.textoCifrado.setValue(this.cifrado.join(''));
  }

  public descifrar() {
    this.cifrado = [];
    for (let index = 0; index < this.textoCifrado.value.length; index++) {
      this.cifrado[index] = (this.alfabetoReverso.get(this.textoCifrado.value.charAt(index)) );
    }
    this.texto.setValue(this.cifrado.join(''));
  }


  public random() {
    const aux = abcdario.slice(0);
    let j, x, i;
    for (i = aux.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = aux[i];
        aux[i] = aux[j];
        aux[j] = x;
    }
    i = 0;
    this.ABC.forEach(element => {
      const char = aux.pop();
      this.alfabeto.set(element, char);
      this.alfabetoReverso.set(char, element);
      this.abcdario[i++] = char;
    });
    console.log(this.ABC);
    console.log(this.abcdario);

  }

}
