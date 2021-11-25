import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { InformationComponent } from './information/information.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'promotion/#', redirectTo: '/promotion', pathMatch: 'full' },
  { path: 'main-page/#', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'information', component: InformationComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'promotion', component: PromotionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
