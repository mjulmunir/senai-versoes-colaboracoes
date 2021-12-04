import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/prduct-media-item';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-card-promotion',
  templateUrl: './card-promotion.component.html',
  styleUrls: ['./card-promotion.component.css'],
  animations: [
    trigger('wordClock', [
      state(
        'clock',
        style({
          width: '30%',
          borderColor: '#198754',
        })
      ),
      state(
        'word',
        style({
          width: '100%',
          height: '100%',
          backgroundColor: '#198754',
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          color: 'white',
        })
      ),
      transition('word <=> clock', [animate(300)]),
    ]),

    trigger('flipCard', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('back <=> front', animate('400ms ease-out')),
    ]),
  ],
})
export class CardPromotionComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  toggle(product: Product) {
    product.status = !product.status;
  }

  emphasize(product: Product): void {
    product.rotate = !product.rotate;
  }
}
