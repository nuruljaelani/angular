import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products
    })
  }

  onDelete(product: Product) {
    console.log(product.id)
    this.productService.deleteProduct(product).subscribe(() => {
      this.products = this.products.filter(p => p.id !== product.id)
    })
  }

}
