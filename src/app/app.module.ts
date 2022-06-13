import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DasheboardComponent } from './dasheboard/dasheboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SeletonLoaderModule } from './seleton-loader/seleton-loader.module';
import { TimlineComponent } from './timline/timline.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarModule } from './snackbar/snackbar/snackbar.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DasheboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    TimlineComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    // ToastrModule added
    AppRoutingModule,
    SeletonLoaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
