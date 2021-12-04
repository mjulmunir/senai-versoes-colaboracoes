import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

import { PROMOTIONAL_PRODUCTS } from "src/app/prduct-media-item";

@Component({
  selector: "app-promotion",
  templateUrl: "./promotion.component.html",
  styleUrls: ["./promotion.component.css"],
})
export class PromotionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      var d = new Date();
      var hours = 23 - d.getHours();
      var min = 59 - d.getMinutes();
      var sec = 59 - d.getSeconds();

      var minutes = `${min}`.length === 1 ? `0${min}` : `${min}`;
      var seconds = `${sec}`.length === 1 ? `0${sec}` : `${sec}`;

      var timers = document.getElementsByClassName("timer");

      for (let i = 0; i < timers.length; i++) {
        timers[i].innerHTML =
          timers[i].innerHTML !== "COMPRAR"
            ? `${hours}:${minutes}:${seconds}`
            : "COMPRAR";
      }

      $(".card-footer")
        .on("mouseover", function () {
          $(this).children(".timer").text("COMPRAR");
        })
        .on("mouseout", function () {
          $(this).children(".timer").text(`${hours}:${minutes}:${seconds}`);
        });
    }, 1000);
  }

  promotional_products = PROMOTIONAL_PRODUCTS;
}
