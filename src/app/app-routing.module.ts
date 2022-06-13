import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DasheboardComponent } from './dasheboard/dasheboard.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SeletonLoaderComponent } from './seleton-loader/seleton-loader.component';
import { TimlineComponent } from './timline/timline.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const routes: Routes = [
  {path:'', redirectTo:'dasheboard', pathMatch:'full'},
  {path:'dasheboard', component:DasheboardComponent},
  {path:'products', component:ProductsComponent},
  {path:'statistics', component:StatisticsComponent},
  {path:'coupens', component:CoupensComponent},
  {path:'pages', component:PagesComponent},
  {path:'media', component:MediaComponent},
  {path:'settings', component:SettingsComponent},
  {path:'seletonloader', component:SeletonLoaderComponent},
  {path:'timeline', component:TimlineComponent},
  {path:'snackbar', component:SnackbarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
