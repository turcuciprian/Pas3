import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page.component';
import { MobileComponent } from './mobile.component';
import { DesktopComponent } from './desktop.component';
const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'desktop', component: DesktopComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MobileComponent,
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
