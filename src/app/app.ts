import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './add-adress/add-address';
import { AddressIndexComponent } from './address-index/address-index';
import { IconsModule } from 'meepo-icons';
let routes: Routes = [{
    path: 'address/add',
    component: AddAddressComponent
}, {
    path: 'address/index',
    component: AddressIndexComponent
}];

import { MeepoBmapModule } from 'meepo-bmap';
import { MinirefreshModule } from 'meepo-minirefresh';
import { EmptyModule } from 'meepo-empty';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MeepoBmapModule,
        IconsModule,
        MinirefreshModule,
        EmptyModule
    ],
    exports: [
    ],
    declarations: [
        AddAddressComponent,
        AddressIndexComponent
    ],
    providers: [
    ],
})
export class SwiperModule { }
