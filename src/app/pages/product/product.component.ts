import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    public Image : string
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.productService.getProducts('./assets/mock-data/products.json')
            .subscribe(res => {
                this.product = res[id-1];
                this.Image = 'url(./assets/imgs/' + this.product.image + ')';
            })
    };
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };
   
    ChangeImage(i){
        this.Image = 'url(./assets/imgs/' + i + ')';
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
