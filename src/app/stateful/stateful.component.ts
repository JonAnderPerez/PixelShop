import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Product } from '../interface/product';

import { Shop } from '../models/shop.model';


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  @ViewChild (ConfirmComponent, {static: false}) confirmChild: ConfirmComponent;

  shopModel: any;
  boughtItems: Array<Product>;
  errorHttp: boolean;

  private shopSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = [];
    this.shopModel = {shopItems: []};
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => {this.shopModel.shopItems = respuesta;},
      (respuesta: Response) => {this.errorHttp = true;}
    );

    this.onGlobalKeyboard();
  }

  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }

  clickItem(curso) {
    this.boughtItems.push(curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
    this.onConfirm();
  }

  finalPrice() {
    let precioFinal = 0;
    this.boughtItems.forEach((item) => {
      precioFinal += item.price;
    });
    return precioFinal;
  }

  onConfirm() {
    alert('Has añadido un nuevo curso');
  }

  onKeyboard(_event: KeyboardEvent) {
    if(_event.key === 'Enter') {
      alert(`Has presionado la tecla ${_event.key}`);
    }
  }

  onGlobalKeyboard() {
    document.addEventListener('keypress', (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    });
  }

}
