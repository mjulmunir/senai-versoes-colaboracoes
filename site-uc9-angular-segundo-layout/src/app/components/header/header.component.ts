import { Component } from "@angular/core";

import { DROPDOWN_ITEMS } from "src/app/dropdown-items";
import { NAVBAR_ITEMS } from "src/app/navbar-items";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  navbarItem = NAVBAR_ITEMS;
  dropdownItem = DROPDOWN_ITEMS;
}
