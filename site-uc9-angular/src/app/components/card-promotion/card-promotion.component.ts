import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/prduct-media-item";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-card-promotion",
  templateUrl: "./card-promotion.component.html",
  styleUrls: ["./card-promotion.component.css"],
  animations: [
    trigger("wordClock", [
      state(
        "clock",
        style({
          width: "50%",
          height: "60%",
          borderColor: "#198754",
        })
      ),
      state(
        "word",
        style({
          width: "100%",
          height: "100%",
          backgroundColor: "#198754",
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          color: "white",
        })
      ),
      transition("word <=> clock", [animate(300)]),
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
}
