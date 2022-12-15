import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { CartlineService } from 'src/app/services/cartline.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private storageService: StorageService) {
    this.cartLines = storageService.getCartLines();
  }

  cartLines: CartLine[] = [];

  operations: CartlineService = new CartlineService(this.cartLines)

  
}
