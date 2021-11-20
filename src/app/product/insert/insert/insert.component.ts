import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  kode_produk!: string;
  nama_produk!: string;
  jenis_produk!: string;
  harga!: number;
  stok!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.kode_produk) {
      alert('Kode Produk is Required')
    }
    if (!this.nama_produk) {
      alert('Nama Produk is Required')
    }
    if (!this.jenis_produk) {
      alert('Kategori Produk is Required')
    }
    if (!this.harga) {
      alert('Harga Produk is Required')
    }
    if (!this.stok) {
      alert('Stok Produk is Required')
    }
  }

}
