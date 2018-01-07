import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddressModule } from '../../src/app/app';
import { Routes, RouterModule } from '@angular/router';
import { EventModule } from 'meepo-event';
import { FooterModule } from 'meepo-footer';
import { MeepoCoreServiceModule } from 'meepo-core';

let routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'address/index'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddressModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    EventModule.forRoot(),
    FooterModule.forRoot({
      url: './assets/footer.json'
    }),
    MeepoCoreServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

