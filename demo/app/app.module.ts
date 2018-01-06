import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddressModule } from '../../src/app/app';
import { Routes, RouterModule } from '@angular/router';
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

