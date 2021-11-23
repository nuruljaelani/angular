import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  data = {
    kode_produk: '',
    nama_produk: '',
    jenis_produk: '',
    harga: 0,
    stok: 0,
  }

  constructor(private _product: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.data)
    this._product.addProduct(this.data)
      .subscribe((res: any) => {
        if (res) {
          this._router.navigateByUrl('/product')
        }
      })
  }

}
