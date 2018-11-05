import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.scss']
})
export class CifradoComponent implements OnInit {

  public texto: string;
  public cifrado: string;
  public alfabeto: Map<string, string>;
  constructor() { }

  ngOnInit() {
  }

  public cifrar(){
    for (let index = 0; index < this.texto.length; index++) {
      this.cifrado.concat(this.alfabeto.get(this.texto.charAt(index)) );
    }
  }

}
