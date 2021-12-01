import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccountComponent } from "./pages/account/account.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { InformationComponent } from "./pages/information/information.component";
import { PromotionComponent } from "./pages/promotion/promotion.component";

const routes: Routes = [
    { path: "account", component: AccountComponent },
    { path: "contact", component: ContactComponent },
    { path: "", component: HomeComponent },
    { path: "information", component: InformationComponent },
    { path: "promotion", component: PromotionComponent },
    { path: "#", redirectTo: window.location.pathname },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
