import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UuidService } from 'meepo-uuid';
import { StoreService } from 'meepo-store';
import { Location } from '@angular/common';


import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'add-address',
    templateUrl: './add-address.html',
    styleUrls: ['./add-address.scss']
})
export class AddAddressComponent implements OnInit {
    height: string;
    @ViewChild('save') _saveRef: ElementRef;
    address: any = {
        address: '',
        detail: '',
        point: {}
    };
    key: string = '';
    constructor(
        public uuid: UuidService,
        public route: ActivatedRoute,
        public store: StoreService,
        public router: Router,
        public location: Location
    ) {
        this.route.queryParams.subscribe(res => {
            this.key = res.key;
        });
    }
    ngOnInit() { }
    setHeight(e: number) {
        this.height = 'calc( 100% - ' + (e + this._saveRef.nativeElement.clientHeight) + 'px)';
    }
    onSave(e: any) {
        this.address.address = e.address;
        this.address.detail = e.detail;
    }
    centerChange(e: any) {
        this.address.point = e;
    }
    doSave() {
        this.address.uid = this.uuid.v1();
        let addressList: any[] = this.store.get(this.key, []);
        addressList = [this.address, ...addressList];
        this.store.set(this.key, addressList);
        this.location.back();
    }
}