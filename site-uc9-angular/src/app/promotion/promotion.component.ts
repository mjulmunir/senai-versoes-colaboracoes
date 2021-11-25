import { Component, OnInit } from '@angular/core';
import { PROMOTION_PRODUCTS } from '../promotion-products';

import $ from 'jquery';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      var d = new Date();
      var hours = 23 - d.getHours();
      var min = 59 - d.getMinutes();
      var sec = 59 - d.getSeconds();

      var minute = `${min}`.length === 1 ? `0${min}` : min;
      var second = `${sec}`.length === 1 ? `0${sec}` : sec;

      console.log(`${hours}:${minute}:${second}`);

      var timers = document.getElementsByClassName('timer');

      for (let i = 0; i < timers.length; i++) {
        timers[i].innerHTML =
          timers[i].innerHTML !== 'COMPRAR'
            ? `${hours}:${minute}:${second}`
            : 'COMPRAR';
      }

      $('button.timer')
        .on('mouseover', function () {
          $(this).text('COMPRAR');
        })
        .on('mouseout', function () {
          $(this).text(`${hours}:${minute}:${second}`);
        });
    }, 1000);
  }

  promotionProducts = PROMOTION_PRODUCTS;
}
