import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../interface/product'

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatelessComponent implements OnInit {

  @Output () cursoMatriculado: EventEmitter<Product> = new EventEmitter();
  @Input () curso: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursoMatriculado.emit(this.curso);
  }

  isDisabled(){
    console.log(this.curso.title);
    return this.disable;
  }

  mensaje() {
    alert('¿No te vas a descargar la imagen veradad?');
  }

}
