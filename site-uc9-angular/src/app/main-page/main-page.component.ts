import { Component, OnInit } from '@angular/core';

import { NEW_PRODUCTS } from '../new-products';
import { FEATURED_PRODUCTS } from '../featured-products';
import { MEDIA } from '../media';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newProducts = NEW_PRODUCTS;
  featuredProducts = FEATURED_PRODUCTS;
  mediaContent = MEDIA;
}
