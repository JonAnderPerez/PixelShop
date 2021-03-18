import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Product } from '../interface/product'

import { Shop } from '../models/shop.model'


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
  }

  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
  }

  clickItem(curso) {
    this.boughtItems.push(curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  /* Mi solucion */
  finalPrice() {
    let precioFinal = 0;
    this.boughtItems.forEach((item) => {
      precioFinal += item.price;
    });
    return precioFinal;
  }

  /* Su solucion 
  finalPrice() {
    if(this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + item.price, 0
      );
    }
  }*/

}
