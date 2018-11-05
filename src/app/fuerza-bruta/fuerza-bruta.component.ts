import { Component, OnInit } from '@angular/core';
import {dictionary} from '../dictionary';
@Component({
  selector: 'app-fuerza-bruta',
  templateUrl: './fuerza-bruta.component.html',
  styleUrls: ['./fuerza-bruta.component.scss']
})
export class FuerzaBrutaComponent implements OnInit {

  public texto: string;
  public keyword: string;
  public cifrado =  [];
  public alfabeto: Map<string, string>;
  public diccionario = [];

  constructor() {
    this.diccionario = dictionary;
  }

  ngOnInit() {
  }

  public fuerzaBruta( keyword?: string) {
    
  }

}
