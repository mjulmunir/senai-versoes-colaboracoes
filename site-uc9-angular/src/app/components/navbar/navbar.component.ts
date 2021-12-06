import { Component, OnInit } from "@angular/core";

import { DROPDOWN_ITEMS } from "src/app/dropdown-items";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dropdown_items = DROPDOWN_ITEMS;
}
