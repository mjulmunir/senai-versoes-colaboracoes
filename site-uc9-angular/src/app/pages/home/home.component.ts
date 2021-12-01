import { Component, OnInit } from "@angular/core";

import { NEW_PRODUCTS } from "src/app/prduct-media-item";
import { FEATURED_PRODUCTS } from "src/app/prduct-media-item";
import { SOCIAL_MEDIA } from "src/app/prduct-media-item";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    new_products = NEW_PRODUCTS;
    featured_products = FEATURED_PRODUCTS;
    social_media = SOCIAL_MEDIA;
}
