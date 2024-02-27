import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  title!: string;
  description!: string;
  image!: string;
  price!: string;
  company!: string;
  //product!: Product;
  constructor() { }

  ngOnInit() {
    this.title = "Samsung Galaxy S21";
    this.description = "Samsung Galaxy S21 5G";
    this.image = "https://placehold.jp/500x500.png";
    this.price = "700";
    this.company = "Samsung";
    //this.product = new Product("Samsung Galaxy S21", "Samsung Galaxy S21 5G", "https://placehold.jp/500x500.png", "700", "Samsung");
  }

}
