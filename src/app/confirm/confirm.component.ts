import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../interface/product'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input () boughtItems: Array<Product>;
  @Input () finalPrice: number;
  isDisabled: boolean;
  showModal: boolean;

  constructor() { 
    this.isDisabled = true;
  }

  ngOnInit(): void {
  }

}
