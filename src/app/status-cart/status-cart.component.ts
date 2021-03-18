import { Component, OnInit, EventEmitter, SimpleChanges, Input, Output } from '@angular/core';

import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit {

  @Input() price: number;
  @Input() shopModel: Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  confirm() {
    this.add.emit();
  }

}
