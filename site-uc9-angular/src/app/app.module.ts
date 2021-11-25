import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { InformationComponent } from './information/information.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AccountComponent,
    ContactComponent,
    InformationComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
