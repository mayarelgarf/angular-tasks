import { Inject, inject, Injectable } from '@angular/core';
import {CartLine} from 'src/app/interfaces/cart-line'
import { StorageService } from './storage.service';



export class CartlineService  {
  private cartLines: CartLine[];
  constructor(cartlines :CartLine[]) {
    this.cartLines = cartlines;
  }
  
  get Total(): number {
    return this.Shipping+ this.SubTotal;
  }
  get SubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  get Shipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
}
}
