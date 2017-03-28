import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page.component';
import { PastePage1Component } from './paste-page1.component';
import { ReceivePage1Component } from './receive-page1.component';
const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'paste', component: PastePage1Component},
  {path: 'receive', component: ReceivePage1Component},
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PastePage1Component,
    ReceivePage1Component
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
