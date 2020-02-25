import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products: Array<Product>;
    private sub;
    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
        this.sub = this.productService.getProducts('./assets/mock-data/products.json')
            .subscribe(res => {
                this.products = res;
            })
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
